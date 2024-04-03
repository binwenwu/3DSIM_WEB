<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" :showArrow="false" header="时序列表">
      <a-space class="f-mb">
        <mars-button title="添加显示矢量对象的时间段" @click="addAvailability">添加</mars-button>
        <mars-button title="矢量对象一直显示" @click="removeAvailability">清除</mars-button>
      </a-space>
      <template v-for="(item, i) in availability" :key="i">
        <p class="position-title" :span="24">
          <span>第 {{ i + 1 }} 个时间段</span>
          <a-space class="position-title__subfix">
            <!-- <mars-icon icon="add-one" width="16" @click="addItem(item, i)"></mars-icon> -->
            <mars-icon icon="delete" width="16" @click="deleteItem(i)"></mars-icon>
          </a-space>
        </p>
        <table class="mars-primary-table" border="1" bordercolor="#ffffff" cellspacing="0" cellpadding="0">
          <tr>
            <td>开始时间</td>
            <td>
              <mars-date-picker
                v-model:value="item.start"
                format="YYYY-MM-DD HH:mm:ss"
                :allowClear="false"
                :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
                :disabled-date="(current: Dayjs) => disabledDate(current, i, 'start')"
                @change="(current: Dayjs) => datePickerChange(current, i, 'start')"
                @openChange="(status: boolean) => datePickerOpen(status, i, 'start')"
              />
            </td>
          </tr>
          <tr>
            <td>结束时间</td>
            <td>
              <mars-date-picker
                v-model:value="item.stop"
                format="YYYY-MM-DD HH:mm:ss"
                :allowClear="false"
                :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
                :disabled-date="(current: Dayjs) => disabledDate(current, i, 'stop')"
                @change="(current: Dayjs) => datePickerChange(current, i, 'stop')"
                @openChange="(status: boolean) => datePickerOpen(status, i, 'stop')"
              />
            </td>
          </tr>
        </table>
      </template>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import { $message } from "@mars/components/mars-ui/index"
import dayjs, { Dayjs } from "dayjs"
import _ from "lodash-es"
import * as mapWork from "./map"

const activeKey = ref(["1", "2"])

const props = defineProps<{
  availability: any | null
}>()

// eslint-disable-next-line vue/no-dupe-keys
const availability = ref<any[]>([])

watch(
  props,
  () => {
    if (!props.availability) {
      return
    }
    let data = props.availability
    if (!Array.isArray(data) && data._intervals) {
      data = data._intervals
    }
    availability.value = Array.isArray(data)
      ? data?.map((julianObj) => {
          const timeObj = {}
          for (const key in julianObj) {
            const isJulianDate = typeof julianObj[key] !== "string"

            let value = null

            if (julianObj[key]) {
              value = isJulianDate ? dayjs(mapWork.julianToDate(julianObj[key])) : dayjs(julianObj[key])
            }

            timeObj[key] = value
          }

          return timeObj
        }) || []
      : []
  },
  {
    immediate: true
  }
)

const disabledDate = (current: Dayjs, index: number, key: string, isCompare = false) => {
  let startTime: any = null
  let endTime: any = null

  const lastTimeSlot = availability.value[index - 1]
  const currentTimeSlot = availability.value[index]
  const nextTimeSlot = availability.value[index + 1]

  switch (key) {
    case "start":
      if (lastTimeSlot) {
        startTime = lastTimeSlot.stop?.add(1, "second")
      }
      endTime = currentTimeSlot.stop?.subtract(1, "second")
      break
    case "stop":
      startTime = currentTimeSlot.start?.add(1, "second")
      if (nextTimeSlot) {
        endTime = nextTimeSlot.start?.subtract(1, "second")
      }
      break

    default:
      break
  }

  if (isCompare) {
    if (startTime && current < startTime) {
      return { isChange: false, message: `请重新选择时间，须大于等于${dayjs(startTime).format("YYYY-MM-DD HH:mm:ss")}` }
    } else if (endTime && current > endTime) {
      return { isChange: false, message: `请重新选择时间，须小于等于${dayjs(endTime).format("YYYY-MM-DD HH:mm:ss")}` }
    } else {
      return { isChange: true, message: "" }
    }
  } else {
    if (endTime && startTime) {
      return current && (current < startTime || current > endTime)
    } else if (startTime) {
      return current && current < startTime
    } else if (endTime) {
      return current && current > endTime
    } else {
      return null
    }
  }
}

const emits = defineEmits(["availabilityChange"])

const deleteItem = (index: number) => {
  availability.value.splice(index, 1)
  availabilityChange()
}

// function addItem(item: any, index: number) {
//   const copiedTime = _.cloneDeep(item)

//   const newTimeSlot = { start: null, stop: null }
//   newTimeSlot.start = copiedTime.stop.add(5, "second")
//   newTimeSlot.stop = newTimeSlot.start.add(5, "second")

//   availability.value.splice(index + 1, 0, _.cloneDeep(newTimeSlot))
//   availabilityChange()
// }

const addAvailability = () => {
  let newTimeSlot = { start: null, stop: null }
  const avaLength = availability.value.length
  if (!avaLength) {
    newTimeSlot = mapWork.getMapCurrentTime()
  } else {
    const copiedTime = _.cloneDeep(availability.value[avaLength - 1])

    newTimeSlot.start = copiedTime.stop.add(5, "second")
    newTimeSlot.stop = newTimeSlot.start.add(5, "second")
  }

  availability.value.push({ start: dayjs(newTimeSlot.start), stop: dayjs(newTimeSlot.stop) })
  availabilityChange()
}
const removeAvailability = () => {
  availability.value = []
  availabilityChange()
}

let lastDate = null
const datePickerChange = (data: any, index: any, key: string) => {
  const { isChange, message } = disabledDate(data, index, key, true) as any
  if (isChange) {
    availabilityChange()
  } else {
    console.log("message", message)
    $message(message)
    availability.value[index][key] = lastDate
  }
}

const datePickerOpen = (status: boolean, index: number, key: string) => {
  if (status) {
    lastDate = availability.value[index][key]
  } else {
    lastDate = null
  }
}

const availabilityChange = () => {
  const time =
    availability.value?.map((dayjsDate) => {
      const timeObj = {}
      for (const key in dayjsDate) {
        timeObj[key] = dayjsDate[key] ? dayjs(dayjsDate[key]).format("YYYY-MM-DD HH:mm:ss") : null
      }

      return timeObj
    }) || []

  emits("availabilityChange", time)
}
</script>

<style lang="less" scoped>
.position-title {
  border-left: 2px solid #ffffff;
  background-color: rgba(32, 42, 68, 0.5);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  margin-top: 5px;
  margin-bottom: 5px;

  .position-title__subfix {
    float: right;

    :deep(.mars-icon) {
      cursor: pointer;
    }
  }
}
.mars-primary-table {
  tr td:nth-of-type(1) {
    width: 65px;
  }
}
</style>

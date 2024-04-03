<template>
  <mars-dialog title="日照分析" :visible="true" right="10" top="85" width="340">
    <a-collapse v-model:activeKey="activeKey">

      <!-- 返回 -->
      <el-button :icon="Back" size="small" @click="comeBack" circle />
      <!-- 下划线 -->
      <div class="dashed-line"></div>
      <!-- 提示 -->
      <p class="analysis-content_tip">提示:模拟设定时间范围内的太阳光照效果。</p>

      <a-collapse-panel key="1" header="日照效果:">
        <div class="f-mb">
          <a-space>
            <span>日期选择:</span>
            <mars-date-picker v-model:value="currDate" valueFormat="YYYY-MM-DD" />
          </a-space>
        </div>

        <div class="f-mb">
          <a-space>
            <span>时间选择:</span>
            <mars-slider @change="timeChange" v-model:value="timeVal" :min="0" :max="1440" :step="1" />
          </a-space>
        </div>

        <div class="f-mb">
          <a-space>
            <span>当前时间:</span>
            <span>{{ currDate }} {{ hours }} 时 {{ minutes }}分</span>
          </a-space>
        </div>

        <div class="f-mb">
          <a-space>
            <span>自动播放:</span>
            <mars-button @click="startPlay">播放</mars-button>
            <mars-button @click="stopPlay">暂停</mars-button>
          </a-space>
        </div>
      </a-collapse-panel>

      <a-collapse-panel key="2" header="阴影率分析:" class="cameraView">
        <a-space>
          <mars-button @click="drawArea">绘制面</mars-button>
          <mars-button @click="clearArea">清除</mars-button>
        </a-space>
      </a-collapse-panel>
    </a-collapse>
  </mars-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import dayjs from "dayjs"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { useWidget } from "@mars/common/store/widget"
import {
  Back
} from "@element-plus/icons-vue"

const { activate, disable } = useWidget()

// 启用map.ts生命周期
useLifecycle(mapWork)

const activeKey = ref(["1", "2"])

const currDate = ref<string>(dayjs().format("YYYY-MM-DD"))
const timeVal = ref<number>(420)

const hours = computed(() => Math.floor(timeVal.value / 60))
const minutes = computed(() => Math.floor(timeVal.value % 60))

mapWork.eventTarget.on("changeShadows", (event: any) => {
  const date = event.shadowTime
  timeVal.value = date.getHours() * 60 + date.getMinutes()
})

onMounted(() => {
  timeChange()
})

const comeBack = () => {
  clearArea()
  disable("sunshine-analysis")
  activate("analysis")
}

const timeChange = () => {
  mapWork.setShadows(currDate.value, hours.value, minutes.value)
}
const drawArea = () => {
  mapWork.drawArea(currDate.value)
}

const clearArea = () => {
  mapWork.clearArea()
}

const startPlay = () => {
  mapWork.startPlay(currDate.value, hours.value, minutes.value)
}
const stopPlay = () => {
  mapWork.stopPlay()
}
</script>

<style scoped lang="less">
.analysis-content_tip {
    color: #cad1d1;
    padding-top: 5px;
    margin-bottom: 15px;
}

.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}

.mars-pannel-item-label {
  width: 55px;
}
.ant-slider {
  width: 128px;
}
</style>

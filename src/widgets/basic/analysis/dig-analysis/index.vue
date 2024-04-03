<template>
  <mars-dialog title="地形开挖" :visible="true" right="10" top="85">
    <!-- 返回 -->
    <el-button :icon="Back" size="small" @click="comeBack" circle />
    <!-- 下划线 -->
    <div class="dashed-line"></div>
    <div class="terrain-contain">
      <a-row :gutter="[1, 10]">
        <a-col :span="24">
          <a-form-item>
            <a-space>
              <a-checkbox v-model:checked="formState.enabledWadi" @change="chkClippingPlanes"> 是否挖地 </a-checkbox>
              <a-checkbox v-model:checked="formState.enabledWaiqiege" @change="chkUnionClippingRegions"> 是否外切割 </a-checkbox>
              <a-checkbox v-model:checked="formState.enabledShendu" @change="chkTestTerrain"> 深度检测 </a-checkbox>
            </a-space>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="开挖区域" :labelCol="labelCol" :labelAlign="labelAlign">
            <a-space>
              <mars-button @click="btnDrawExtent">添加矩形</mars-button>
              <mars-button @click="btnDraw">添加多边行</mars-button>
              <mars-button @click="removeAll">清除</mars-button>
            </a-space>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="开挖深度" :labelCol="labelCol" :labelAlign="labelAlign">
            <mars-input-number v-model:value="formState.txtHeight" @change="changeClipHeight" :step="1" :min="-500" :max="999" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <mars-table :pagination="false" :row-selection="rowSelection" :dataSource="dataSource" :columns="columns" size="small" bordered>
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'caozuo'">
                <a-space>
                  <mars-icon icon="move-one" color="#f2f2f2" class="icon-vertical-a" @click="flyto(record)" />
                  <mars-icon icon="delete" color="#f2f2f2" class="icon-vertical-a" @click="deleted(record)" />
                </a-space>
              </template>
              <template v-else>
                {{ record.name }}
              </template>
            </template>
          </mars-table>
        </a-col>
      </a-row>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue"
import type { UnwrapRef } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { Back } from "@element-plus/icons-vue"
import { useWidget } from "@mars/common/store/widget"

// 启用map.ts生命周期
useLifecycle(mapWork)

const { activate, disable } = useWidget()

interface FormState {
  enabledWadi: boolean
  enabledWaiqiege: boolean
  enabledShendu: boolean
  txtHeight: number
}
interface TableItem {
  key: number
  name: string
}

const labelCol = ref({ span: 6 })
const labelAlign = ref("left")

const formState: UnwrapRef<FormState> = reactive({
  enabledWadi: true,
  enabledWaiqiege: false,
  enabledShendu: true,
  txtHeight: 50
})
// 表格数据
const columns = ref([
  {
    title: "开挖区域",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "caozuo",
    key: "caozuo",
    width: 80,
    align: "center"
  }
])
const dataSource = ref([])

const rowKeys = ref<string[]>([])

const rowSelection = ref({
  hideSelectAll: true,
  hideDefaultSelections: true,
  selectedRowKeys: rowKeys,
  onChange: (selectedRowKeys: string[]) => {
    // 使得点击之后选项改变
    rowKeys.value = selectedRowKeys
  },
  onSelect: (record: TableItem, selected: boolean) => {
    mapWork.showHideArea(record.key, selected)
  }
})

onMounted(() => {
  mapWork.addTerrainClip(formState.txtHeight)
})

mapWork.eventTabel.on("tableObject", function (event: any) {
  dataSource.value = []
  nextTick(() => {
    dataSource.value = event.table
    rowKeys.value = event.table.map((item: any) => item.key)
  })
})

// 表格的操作
const flyto = (record: any) => {
  mapWork.flyToGraphic(record.key)
}
const deleted = (record: any) => {
  mapWork.deletedGraphic(record.key)
  dataSource.value = dataSource.value.filter((item: any) => item.key !== record.key)

  mapWork.changeTable(dataSource.value)
}

// 是否挖地
const chkClippingPlanes = () => {
  mapWork.chkClippingPlanes(formState.enabledWadi)
}
// 是否外切割
const chkUnionClippingRegions = () => {
  mapWork.chkUnionClippingRegions(formState.enabledWaiqiege)
}
// 深度检测
const chkTestTerrain = () => {
  mapWork.chkTestTerrain(formState.enabledShendu)
}

// 重置矢量数据的设置
function resetEnabled() {
  // 是否挖地
  formState.enabledWadi = true
  mapWork.chkClippingPlanes(formState.enabledWadi)

  // 是否外切割
  formState.enabledWaiqiege = false
  mapWork.chkUnionClippingRegions(formState.enabledWaiqiege)
}

// 添加矩形
const btnDrawExtent = () => {
  resetEnabled()
  mapWork.btnDrawExtent(formState.enabledWadi)
}
// 添加多边形
const btnDraw = () => {
  resetEnabled()

  mapWork.btnDraw(formState.enabledWadi)
}
// 清除
const removeAll = () => {
  resetEnabled()

  mapWork.removeAll()

  // 清除表格
  dataSource.value = []
}
// 改变切割的深度
const changeClipHeight = () => {
  mapWork.changeClipHeight(formState.txtHeight)
}

const comeBack = () => {
  disable("dig-analysis")
  activate("analysis")
}
</script>
<style scoped lang="less">
.miFont {
  font-size: 15px;
  margin-top: 10px;
  margin-left: -11px;
  color: white;
}
.terrain-contain {
  width: 337px;
  margin-right: 0;
}

.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}
</style>

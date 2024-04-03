<template>
  <mars-dialog :draggable="true" title="属性编辑" width="315" top="85" bottom="300" left="10" :minWidth="200">
    <div class="top-handle-bar">
      <a-space>
        <mars-icon icon="send" width="20" @click="flyToGraphic" title="飞行定位"></mars-icon>
        <mars-icon icon="delete" width="20" @click="deleteEntity" title="删除"></mars-icon>
        <mars-icon icon="save" width="20" @click="getGeoJson" title="导出geojson"></mars-icon>
      </a-space>
    </div>
    <div class="attr-editor-main">
      <mars-styles
        v-if="activeTab === 'style'"
        :style="style"
        :layerName="layerName"
        :customType="customType"
        :graphicType="graphicType"
        @styleChange="styleChange"
      />
      <mars-availability v-if="activeTab === 'availability'" :availability="availability" @availabilityChange="availabilityChange" />
    </div>
    <template #footer>
      <a-tabs v-model:activeKey="activeTab" centered type="card" tabPosition="bottom" @change="tabChange">
        <a-tab-pane key="style" tab="样式"></a-tab-pane>
        <a-tab-pane v-if="showAvailability" key="availability" tab="时序"></a-tab-pane>
      </a-tabs>
    </template>
  </mars-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw } from "vue"
import _ from "lodash-es"
import localforage from "localforage"
import MarsStyles from "./mars-styles.vue"
import MarsAvailability from "./mars-availability.vue"
import * as mapWork from "./map"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { useWidget } from "@mars/common/store/widget"

const { currentWidget } = useWidget()

const activeTab = ref("style") // 卡片所处位置

const tabChange = (item: any) => {
  localforage.setItem("active-tab", item)
  availability.value = graphic.availability
  style.value = graphic.style
}

const layerName = ref("")
const customType = ref("")
const graphicType = ref("")
const style = ref(null)

const availability = ref(null) // 时序
const showAvailability = ref(true)

let graphic

// 启用map.ts生命周期
useLifecycle(mapWork)

onMounted(() => {
  graphic = currentWidget.data.graphic
  if (currentWidget.data.hideAvailability) {
    showAvailability.value = false
  }
  updataLayer()
})

if (currentWidget) {
  currentWidget.onUpdate((e) => {
    graphic = e.data.graphic
    updataLayer()
  })
}

// 监听到矢量数据发生变化
function updataLayer() {
  if (!graphic || graphic.state === "destroy") {
    return
  }

  layerName.value = graphic._layer.name || ""
  graphicType.value = graphic.type
  customType.value = currentWidget.data.styleType || graphic.options.styleType

  console.log("开始编辑style样式", graphic.style)
  style.value = _.cloneDeep(graphic.style)

  const avail = graphic.availability
  console.log("开始编辑availability时序", avail)
  availability.value = _.cloneDeep(avail)
}

function styleChange(style: any) {
  style = toRaw(style)
  console.log("修改了style样式", style)

  graphic.setStyle(style)
}

function availabilityChange(availability: any[]) {
  if (availability && availability.length) {
    graphic.availability = availability
  } else {
    graphic.availability = null
  }
}

// *********************  删除定位保存文件方法  ******************* //
function getGeoJson() {
  const geojson = graphic.toGeoJSON() // 文件处理
  geojson.properties._layer = graphic._layer.name

  mapWork.downloadFile("标绘item.json", JSON.stringify(geojson))
}

function flyToGraphic() {
  graphic.flyTo() // 事件处理
}

function deleteEntity() {
  graphic.remove() // 删除
}
</script>
<style lang="less" scoped>
.top-handle-bar {
  border-bottom: 1px solid #cde1de;
  padding: 5px 0 2px 0;

  :deep(.mars-icon) {
    cursor: pointer;
  }
}

.attr-editor-main {
  height: calc(100% - 40px);
  overflow-y: auto;

  :deep(*) {
    font-size: 12px;
  }
}

:deep(.ant-tabs-nav) {
  margin: 0;
}

:deep(.ant-select),
:deep(.ant-input-number) {
  width: 100%;
}
</style>

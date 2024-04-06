<template>
  <mars-dialog title="图上标绘" :visible="true" right="10" top="85" width="345">
    <div>
      <a-row>
        <a-col :span="5">图层管理:</a-col>
        <a-col :span="19">
          <a-space>
            <a-checkbox v-model:checked="enabledShowHide" @change="onChangeShow">显示隐藏</a-checkbox>
            <a-checkbox v-model:checked="enabledPopup" @change="onChangePopup">Popup绑定</a-checkbox>
            <a-checkbox v-model:checked="enabledTooltip" @change="onChangeTooltip">Tooltip绑定</a-checkbox>
            <a-checkbox v-model:checked="enabledRightMenu" @change="onChangeContextMenu">右键菜单绑定</a-checkbox>
            <a-checkbox v-model:checked="enabledEdit" @change="onChangeHasEdit">是否编辑</a-checkbox>
            <a-checkbox v-model:checked="onlyPickModelPosition" @change="onChangeOnlyPickModel">
              <span title="屏蔽拾取地形坐标，避免穿透3dtiles模型">仅在Tiles上拾取</span>
            </a-checkbox>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="f-pt">
      <a-row>
        <a-col :span="5">数据管理:</a-col>
        <a-col :span="19">
          <a-space>
            <mars-button @click="onClickClear">清除</mars-button>
            <a-upload
              :multiple="false"
              name="file"
              accept="json,geojson,kml,kmz"
              :showUploadList="false"
              @change="onClickOpenJson"
              :beforeUpload="() => false"
            >
              <mars-button>打开</mars-button>
            </a-upload>
            <mars-button @click="onClickSaveJson">保存GeoJSON</mars-button>
            <mars-button @click="onClickSaveKml">另存KML</mars-button>
            <mars-button @click="onClickSaveWKT">另存WKT</mars-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="f-pt">
      <a-row>
        <a-col :span="5">单个点类:</a-col>
        <a-col :span="19">
          <a-space>
            <mars-button @click="drawPoint">点</mars-button>
            <!-- <mars-button @click="drawLabel">文字</mars-button> -->
            <mars-button @click="drawMarker">图标点</mars-button>
            <!-- <mars-button @click="onClickStartDarw">小模型</mars-button> -->
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="f-pt">
      <a-row>
        <a-col :span="5">二维空间:</a-col>
        <a-col :span="19">
          <a-space>
            <mars-button @click="drawPolyline(false)">线</mars-button>
            <mars-button @click="drawBrushLine(false)">自由线</mars-button>
            <mars-button @click="drawPolygon(false)">面</mars-button>
            <mars-button @click="drawEllipse(false)">圆</mars-button>
            <mars-button @click="drawRectangle(false)">矩形</mars-button>
            <mars-button @click="draPlane">平面</mars-button>
            <mars-button @click="drawCurve(false)">曲线</mars-button>
            <mars-button @click="drawCorridor(false)">走廊</mars-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="f-pt">
      <a-row>
        <a-col :span="5">二维贴地:</a-col>
        <a-col :span="19">
          <a-space>
            <mars-button @click="drawPolyline(true)">线</mars-button>
            <mars-button @click="drawBrushLine(true)">自由线</mars-button>
            <mars-button @click="drawPolygon(true)">面</mars-button>
            <mars-button @click="drawEllipse(true)">圆</mars-button>
            <mars-button @click="drawCurve(true)">曲线</mars-button>
            <mars-button @click="drawCorridor(true)">走廊</mars-button>
            <mars-button @click="drawRectangle(true)">矩形</mars-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="f-pt">
      <a-row>
        <a-col :span="5">三维空间:</a-col>
        <a-col :span="19">
          <a-space>
            <mars-button @click="drawEllipsoid">球</mars-button>
            <mars-button @click="draWall(false)">墙</mars-button>
            <mars-button @click="drawBox">盒子</mars-button>
            <mars-button @click="drawExtrudedCircle">圆柱</mars-button>
            <mars-button @click="drawCylinder">圆锥</mars-button>
            <mars-button @click="draWall(true)">闭合墙</mars-button>
            <mars-button @click="drawExtrudedPolygon">面立体</mars-button>
            <mars-button @click="drawExtrudedRectangle">矩形立体</mars-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
  </mars-dialog>
</template>

<script lang="ts" setup>
import { ref, markRaw, onMounted, onUnmounted } from "vue"
import * as mars3d from "mars3d"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { useWidget } from "@mars/common/store/widget"

// 启用map.ts生命周期
useLifecycle(mapWork)


interface FileItem {
  uid: string
  name?: string
  status?: string
  response?: string
  url?: string
}

interface FileInfo {
  file: FileItem
  fileList: FileItem[]
}

// 显示隐藏
const enabledShowHide = ref(true)
const onChangeShow = () => {
  mapWork.graphicLayer.show = enabledShowHide.value
}

// 是否绑定Popup
const enabledPopup = ref(false)
const onChangePopup = () => {
  if (enabledPopup.value) {
    mapWork.bindLayerPopup()
  } else {
    mapWork.graphicLayer.unbindPopup()
  }
}

// 是否绑定Tooltip
const enabledTooltip = ref(false)
const onChangeTooltip = () => {
  if (enabledTooltip.value) {
    mapWork.graphicLayer.bindTooltip("我是layer上绑定的Tooltip")
  } else {
    mapWork.graphicLayer.unbindTooltip()
  }
}

// 是否绑定右键菜单
const enabledRightMenu = ref(true)
const onChangeContextMenu = () => {
  if (enabledRightMenu.value) {
    mapWork.bindLayerContextMenu()
  } else {
    mapWork.graphicLayer.unbindContextMenu(true)
  }
}

// 是否可编辑
const enabledEdit = ref(true)
const onChangeHasEdit = () => {
  mapWork.graphicLayer.hasEdit = enabledEdit.value
}

// 是否仅在3dtiles上标绘
const onlyPickModelPosition = ref(false)
const onChangeOnlyPickModel = () => {
  mapWork.updateOnlyPickModelPosition(onlyPickModelPosition.value)
}

// 点击清除按钮
const onClickClear = () => {
  mapWork.graphicLayer.clear()
}

// 点击保存GeoJSON
const onClickSaveJson = () => {
  mapWork.saveGeoJSON()
}

// 打开GeoJSON
const onClickOpenJson = (info: FileInfo) => {
  mapWork.openGeoJSON(info.file)
}

// 点击保存KML
const onClickSaveKml = () => {
  mapWork.saveKML()
}

// 点击保存WKT
const onClickSaveWKT = () => {
  mapWork.saveWKT()
}

function drawPoint() {
  mapWork.drawPoint()
}

function drawMarker() {
  mapWork.drawMarker()
}

function drawLabel() {
  mapWork.drawLabel()
}

function onClickStartDarw() {
  mapWork.startDrawModel()
}

function drawPolyline(clampToGround: boolean) {
  mapWork.drawPolyline(clampToGround)
}

function drawBrushLine(clampToGround: boolean) {
  mapWork.drawBrushLine(clampToGround)
}

function drawPolygon(clampToGround: boolean) {
  mapWork.drawPolygon(clampToGround)
}

function drawCurve(clampToGround: boolean) {
  mapWork.drawCurve(clampToGround)
}

function drawCorridor(clampToGround: boolean) {
  mapWork.drawCorridor(clampToGround)
}

function drawEllipse(clampToGround: boolean) {
  mapWork.drawEllipse(clampToGround)
}

function drawRectangle(clampToGround: boolean) {
  mapWork.drawRectangle(clampToGround)
}

function draPlane() {
  mapWork.draPlane()
}

function draWall(closure: boolean) {
  mapWork.draWall(closure)
}

function drawBox() {
  mapWork.drawBox()
}

function drawCylinder() {
  mapWork.drawCylinder()
}

function drawEllipsoid() {
  mapWork.drawEllipsoid()
}

function drawExtrudedPolygon() {
  mapWork.drawExtrudedPolygon()
}

function drawExtrudedRectangle() {
  mapWork.drawExtrudedRectangle()
}

function drawExtrudedCircle() {
  mapWork.drawExtrudedCircle()
}

// 数据编辑属性面板 相关处理
const { activate, disable, isActivate, updateWidget } = useWidget()
onMounted(() => {
//   const mars3d = window.mapWork.mars3d
  // 矢量数据创建完成
  mapWork.graphicLayer.on(mars3d.EventType.drawCreated, function (e) {
    if (enabledEdit.value) {
      showEditor(e)
    }
  })
  // 修改了矢量数据
  mapWork.graphicLayer.on(
    [mars3d.EventType.editStart, mars3d.EventType.editMovePoint, mars3d.EventType.editStyle, mars3d.EventType.editRemovePoint],
    function (e) {
      showEditor(e)
    }
  )
  // 停止编辑
  mapWork.graphicLayer.on([mars3d.EventType.editStop, mars3d.EventType.removeGraphic], function (e) {
    setTimeout(() => {
      if (!mapWork.graphicLayer.isEditing) {
        disable("graphic-editor")
      }
    }, 100)
  })
})

onUnmounted(() => {
  disable("graphic-editor")
})

const showEditor = (e: any) => {
  const graphic = e.graphic
  if (!graphic._conventStyleJson) {
    graphic.options.style = graphic.toJSON().style // 因为示例中的样式可能有复杂对象，需要转为单个json简单对象
    graphic._conventStyleJson = true // 只处理一次
  }

  if (!isActivate("graphic-editor")) {
    console.log({
        graphic: markRaw(graphic)
      })
    activate({
      name: "graphic-editor",
      data: {
        graphic: markRaw(graphic)
      }
    })
  } else {
    updateWidget("graphic-editor", {
      data: {
        graphic: markRaw(graphic)
      }
    })
  }
}
</script>
<style scoped lang="less">
:deep(.ant-space) {
  flex-wrap: wrap;
}
</style>

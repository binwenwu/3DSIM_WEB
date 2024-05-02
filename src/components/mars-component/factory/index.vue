<template>
  <div>
    <div>设置模型移动步长</div>
    <div style="display: flex">
      <tiny-button type="primary" plain @click="setMoveStep(0.1)">0.1</tiny-button>
      <tiny-button type="primary" plain @click="setMoveStep(1)">1</tiny-button>
      <tiny-button type="primary" plain @click="setMoveStep(10)">10</tiny-button>
      <tiny-button type="primary" plain @click="setMoveStep(100)">100</tiny-button>
    </div>
    <div>按步长移动</div>
    <div style="display: flex">
      <tiny-button type="primary" plain @click="moveModel('x+')">X+</tiny-button>
      <tiny-button type="primary" plain @click="moveModel('x-')">X-</tiny-button>
      <tiny-button type="primary" plain @click="moveModel('y+')">Y+</tiny-button>
      <tiny-button type="primary" plain @click="moveModel('y-')">Y-</tiny-button>
      <tiny-button type="primary" plain @click="moveModel('z+')">Z+</tiny-button>
      <tiny-button type="primary" plain @click="moveModel('z-')">Z-</tiny-button>
    </div>
    <div>调整工厂透明度</div>
    <div>
      <el-slider v-model="opacityFactory" :step="1" :min="1" :max="10" @change="changeOpacityFactory" />

    </div>
    <div>
      <tiny-button type="primary" native-type="submit" @click="addUnderTileLayer">
        显示地下管网
      </tiny-button>
      <tiny-button type="primary" native-type="submit" @click="removeTileLayer">
        清除并关闭
      </tiny-button>
    </div>
  </div>
</template>

<script lang="jsx">
import { inject, onMounted, onUnmounted, ref } from 'vue'
import * as mars3d from 'mars3d'

export default {
  data () {
    return {
      opacityFactory: 10
    }
  },
  setup (props) {
    let map
    let moveStep = ref(0)
    let x = ref(0)
    let y = ref(0)
    let z = ref(0)
    let tiles3dLayer

    const setMoveStep = (value) => {
      moveStep.value = value
    }

    onUnmounted(() => {
      removeTileLayer()
    })

    onMounted(() => {
      const getMapInstance = inject('getMapInstance')
      map = getMapInstance()
      addTileLayer()
    })


    const removeTileLayer = () => {
      let layer = map.getLayerById('factory-layer')
      layer && map.removeLayer(layer)
      tiles3dLayer = undefined
      let layer_pipe = map.getLayerById('pipe-tile3d')
      layer_pipe && map.removeLayer(layer_pipe)
      terrainPlanClip && map.removeThing(terrainPlanClip)
    }

    const moveModel = (param) => {
      if (param === 'x+') {
        x.value = x.value + moveStep.value
      } else if (param === 'x-') {
        x.value = x.value - moveStep.value
      } else if (param === 'y+') {
        y.value = y.value + moveStep.value
      } else if (param === 'y-') {
        y.value = y.value - moveStep.value
      } else if (param === 'z+') {
        z.value = z.value + moveStep.value
      } else if (param === 'z-') {
        z.value = z.value - moveStep.value
      }
      setTranslation(x.value, y.value, z.value)
    }

    const setTranslation = (x, y, z) => {
      const translation = mars3d.Cesium.Cartesian3.fromArray([x, y, z])
      const modelMatrix = mars3d.Cesium.Matrix4.fromTranslation(translation)
      tiles3dLayer.tileset.modelMatrix = modelMatrix

      // 打印值
      const position = mars3d.PointUtil.getPositionByHprAndOffset(tiles3dLayer.position, new mars3d.Cesium.Cartesian3(x, y, z))
      const point = mars3d.LngLatPoint.parse(position)
      console.log('新坐标为', point)
    }

    const addTileLayer = () => {
      map.fixedLight = true // 固定光照，避免gltf模型随时间存在亮度不一致。
      tiles3dLayer = new mars3d.layer.TilesetLayer({
        id: 'factory-layer',
        name: '石化工厂',
        url: '//data.mars3d.cn/3dtiles/max-shihua/tileset.json',
        position: { lng: 117.077158, lat: 31.659116, alt: 44.6 },
        maximumScreenSpaceError: 1,
        // 以下参数可以参考用于3dtiles总数据大，清晰度过高情况下进行性能优化。这不是一个通用的解决方案，但可以以此为参考。
        skipLevelOfDetail: true,
        loadSiblings: true,
        cullRequestsWhileMoving: true,
        cullRequestsWhileMovingMultiplier: 10,
        preferLeaves: true,
        dynamicScreenSpaceError: true,
        preloadWhenHidden: true,
        enableDebugWireframe: true, // 是否可以进行三角网的切换显示
        // 以上为优化的参数
        popup: [
          { field: 'id', name: '编码' },
          { field: 'name', name: '名称' },
          {
            type: 'html',
            html: '<label>地址</label><div>高速S203入口</div>'
          },
          {
            type: 'html',
            html: '<label>负责人</label><div>张三</div>'
          }
        ],
        // popup: "all",
        highlight: {
          type: mars3d.EventType.click, // 默认为鼠标移入高亮，也可以指定click单击高亮
          outlineEffect: true, // 采用OutlineEffect方式来高亮
          color: '#00FF00',
          width: 6
        },
        center: { lat: 31.653047, lng: 117.084439, alt: 354, heading: 319, pitch: -23 },
        flyTo: true
      })
      map.addLayer(tiles3dLayer)
    }

    //添加地下管网
    const addUnderTileLayer = () => {

      // 加个模型
      const pipeTiles3dLayer = new mars3d.layer.TilesetLayer({
        id:'pipe-tile3d',
        name: '地下管网',
        url: '//data.mars3d.cn/3dtiles/max-piping/tileset.json',
        position: { lng: 117.077158, lat: 31.659116, alt: -10.6 },
        rotation: { z: 336.7 },
        highlight: { type: 'click', outlineEffect: true, width: 8, color: '#FFFF00' },
        center: { 'lat': 31.649644, 'lng': 117.083733, 'alt': 704.2, 'heading': 338.2, 'pitch': -33.7 },
        preloadWhenHidden:true,
        maximumScreenSpaceError: 32,
        dynamicScreenSpaceError: true,
        cullWithChildrenBounds: false,
        skipLevelOfDetail: true,
        preferLeaves: true,
        enableDebugWireframe: true, // 是否可以进行三角网的切换显示
        show: true,
        flyTo: true
      })
      map.addLayer(pipeTiles3dLayer)
      terrainClips()
    }
    let terrainPlanClip
    const terrainClips = (heightVal) => {
      // 挖地区域
       terrainPlanClip = new mars3d.thing.TerrainClip({
        positions: [
          [117.078920, 31.653758, -42.63],
          [117.073848, 31.658038, -42.63],
          [117.079288, 31.662166, -42.63],
          [117.083769, 31.657868, -42.63]
        ],
        diffHeight: heightVal, // 高度
        image: './img/textures/poly-stone.jpg',
        imageBottom: './img/textures/poly-soil.jpg',
        splitNum: 50 // 井边界插值数
      })
      map.addThing(terrainPlanClip)
    }

    const changeOpacityFactory = (value) => {
      let opacity = value / 10
      let layer = map.getLayerById('factory-layer')
      layer && layer.setOpacity(opacity)
    }

    return {
      changeOpacityFactory,
      setMoveStep,
      moveModel,
      removeTileLayer,
      addUnderTileLayer
    }
  }
}
</script>

<style scoped>

</style>

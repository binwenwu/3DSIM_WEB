<template>
  <div>
    <div style="display: flex">
      <div>漫游控制</div>
      <tiny-button type="primary" native-type="submit" @click="startWander">
        开始漫游
      </tiny-button>
      <tiny-button type="primary" native-type="submit" @click="stopWander">
        停止漫游
      </tiny-button>
    </div>
    <div style="display: flex">
      <div>室内视角</div>
      <tiny-button type="primary" native-type="submit" @click="centerAtDX1">
        教室
      </tiny-button>
      <tiny-button type="primary" native-type="submit" @click="centerAtDX2">
        走廊
      </tiny-button>
      <tiny-button type="primary" native-type="submit" @click="centerAtDX3">
        楼梯间
      </tiny-button>
    </div>

  </div>
</template>

<script lang="jsx">
import { inject, onMounted,onUnmounted } from 'vue'
import * as mars3d from 'mars3d'
import { Notify } from '@opentiny/vue'

export default {
  setup (props) {
    let map
    onUnmounted(()=>{
      map.keyboardRoam.enabled = false // 开启键盘漫游
      let graphicLayer = map.getLayerById('routeLayer')
      map.removeLayer(graphicLayer)

      let tileLayer = map.getLayerById('schoolLayer')
      map.removeLayer(tileLayer)

    })

    onMounted(() => {
      const getMapInstance = inject('getMapInstance')
      map = getMapInstance()
      addWanderTileSet()
      // 键盘漫游
      map.keyboardRoam.setOptions({
        moveStep: 0.1, // 平移步长 (米)。
        dirStep: 50, // 相机原地旋转步长，值越大步长越小。
        rotateStep: 0.3, // 相机围绕目标点旋转速率，0.3-2.0
        minPitch: 0.1, // 最小仰角  0-1
        maxPitch: 0.95 // 最大仰角  0-1
      })
      map.keyboardRoam.enabled = true // 开启键盘漫游

      addRouteLayer()
    })
    let fixedRoute
    const addRouteLayer = () => {
      const graphicLayer = new mars3d.layer.GraphicLayer({id:"routeLayer"})
      map.addLayer(graphicLayer)

      fixedRoute = new mars3d.graphic.FixedRoute({
        name: '室内路线',
        speed: 5,
        offsetHeight: 1.6,
        positions: [
          [117.25164, 31.843773, 32.0],
          [117.251042, 31.843772, 32.0],
          [117.250613, 31.844058, 32.0],
          [117.250677, 31.844146, 32.0],
          [117.250696, 31.844134, 32.0],
          [117.250657, 31.844098, 36.0],
          [117.250611, 31.84406, 36.0],
          [117.251039, 31.843773, 36.0]
        ],
        camera: {
          type: 'dy',
          followedX: 1,
          followedZ: 0.2
        }
      })
      graphicLayer.addGraphic(fixedRoute)
    }

    const startWander = () => {
      fixedRoute.start()
    }

    const stopWander = () => {
      fixedRoute.stop()
      Notify({
        type: 'info',
        message: '请鼠标单击地图任意区域后，您再可以键盘按A S D W Q E键控制前后左右, 上下左右键控制旋转, 进行手动漫游。'
      })
    }
    const centerAtDX1 = () => {
      stopWander()
      map.setCameraView({ lat: 31.843703, lng: 117.251038, alt: 33, heading: 50, pitch: -6 })
    }

    const centerAtDX2 = () => {
      stopWander()
      map.setCameraView({ lat: 31.843816, lng: 117.250978, alt: 34, heading: 308, pitch: -8 })
    }

    const centerAtDX3 = () => {
      stopWander()
      map.setCameraView({ lat: 31.843789, lng: 117.251188, alt: 42, heading: 6, pitch: -31 })
    }

    const addWanderTileSet = () => {
      let tiles3dLayer = new mars3d.layer.TilesetLayer({
        id:"schoolLayer",
        name: '学校',
        url: '//data.mars3d.cn/3dtiles/bim-daxue/tileset.json',
        position: { lng: 117.251229, lat: 31.844015, alt: 31.2 },
        maximumScreenSpaceError: 8,
        show: true,
        dynamicScreenSpaceError: true,
        cullWithChildrenBounds: false,
        skipLevelOfDetail: true,
        preferLeaves: true,
        enableDebugWireframe: true, // 是否可以进行三角网的切换显示
        flyTo: true
      })
      map.addLayer(tiles3dLayer)
    }

    return {
      startWander,
      stopWander,
      centerAtDX1,
      centerAtDX2,
      centerAtDX3
    }
  }
}
</script>

<style scoped>

</style>

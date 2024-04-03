<template>
  <div>
    <tiny-button type="primary" native-type="submit" @click="flyToCenter">
      加载视频
    </tiny-button>
    <tiny-button type="primary" native-type="submit" @click="closeVideo">
      关闭视频
    </tiny-button>
  </div>
</template>

<script>
import { inject, onMounted, onUnmounted } from 'vue'
import * as mars3d from 'mars3d'

export default {
  setup (props) {
    let map
    onUnmounted(() => {
      closeVideo()
    })

    onMounted(() => {
      const getMapInstance = inject('getMapInstance')
      map = getMapInstance()
    })

    const flyToCenter = () => {
      map.centerAt({ lat: 31.843175, lng: 117.205295, alt: 223, heading: 178, pitch: -75 })
      addVideo()
    }


    const closeVideo = () => {
      let graphicLayer = map.getLayerById('videoLayer')
      if (graphicLayer) {
        graphicLayer.clear()
        map.removeLayer(graphicLayer)
      }

      let tilesetLayer = map.getLayerById('tileset-kejiyuan')
      if (tilesetLayer) {
        map.removeLayer(tilesetLayer)
      }


    }
    const addVideo = () => {

      // 添加参考三维模型
      const tiles3dLayer = new mars3d.layer.TilesetLayer({
        id:"tileset-kejiyuan",
        name: "合肥国家大学科技园",
        url: "//data.mars3d.cn/3dtiles/qx-hfdxy/tileset.json",
        position: { alt: -24 },
        maximumScreenSpaceError: 1
      })
      map.addLayer(tiles3dLayer)

      // 创建矢量数据图层
      let graphicLayer = new mars3d.layer.GraphicLayer({ id: 'videoLayer' })
      map.addLayer(graphicLayer)
      const video3D = new mars3d.graphic.Video3D({
        position: [117.204472, 31.842488, 120.9],
        style: {
          url: '//data.mars3d.cn/file/video/lukou.mp4',
          maskImage: 'img/textures/video-mask.png', // 羽化视频四周，融合更美观
          angle: 33.3,
          angle2: 23.4,
          heading: 140.7,
          pitch: -82.1
        },
        attr: { remark: '示例1' }
      })
      graphicLayer.addGraphic(video3D)

      const video3D2 = new mars3d.graphic.Video3D({
        position: [117.205457, 31.842984, 63.9],
        style: {
          url: '//data.mars3d.cn/file/video/menqian.mp4',
          maskImage: 'img/textures/video-mask.png', // 羽化视频四周，融合更美观
          angle: 46.3,
          angle2: 15.5,
          heading: 178.5,
          pitch: -49.5,
          showFrustum: true
        },
        attr: { remark: '示例2' }
      })
      graphicLayer.addGraphic(video3D2)
    }
    return {
      flyToCenter,
      closeVideo
    }
  },

  mounted () {

  }
}
</script>

<style scoped>

</style>

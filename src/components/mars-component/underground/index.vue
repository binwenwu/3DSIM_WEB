<template>
  <div>地下管网</div>
</template>

<script lang="jsx">
import { inject, onMounted,onUnmounted } from 'vue'
import * as mars3d from 'mars3d'



export default {
  setup(attr) {
    let map
    onUnmounted(()=>{

      let graphicLayer = map.getLayerById('routeLayer')
      map.removeLayer(graphicLayer)

      let tileLayer = map.getLayerById('schoolLayer')
      map.removeLayer(tileLayer)

    })

    onMounted(() => {
      const getMapInstance = inject('getMapInstance')
      map = getMapInstance()
      addTileSet()
      terrainClips(30)
    })

    const addTileSet = () => {
      // 加个模型
      const tiles3dLayer = new mars3d.layer.TilesetLayer({
        name: "地下管网",
        url: "//data.mars3d.cn/3dtiles/max-piping/tileset.json",
        position: { lng: 117.077158, lat: 31.659116, alt: -3.6 },
        rotation: { z: 336.7 },
        maximumScreenSpaceError: 2,

        highlight: { type: "click", outlineEffect: true, width: 8, color: "#FFFF00" },
        center: { lat: 31.838081, lng: 117.216584, alt: 406, heading: 1, pitch: -34 }
      })
      map.addLayer(tiles3dLayer)
    }

    const terrainClips = (heightVal) => {
      // 挖地区域
      let  terrainPlanClip = new mars3d.thing.TerrainClip({
        positions: [
          [117.214769, 31.842048, 42.63],
          [117.217764, 31.842048, 42.63],
          [117.217764, 31.843312, 42.63],
          [117.214769, 31.843312, 42.63]
        ],
        diffHeight: heightVal, // 高度
        image: "./img/textures/poly-stone.jpg",
        imageBottom: "./img/textures/poly-soil.jpg",
        splitNum: 50 // 井边界插值数
      })
      map.addThing(terrainPlanClip)
    }
  }
}
</script>

<style scoped>

</style>

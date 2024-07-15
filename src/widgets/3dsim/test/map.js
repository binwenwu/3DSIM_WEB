import * as mars3d from "mars3d"
import * as turf from "@turf/turf"
import "mars3d-heatmap"

export let map // mars3d.Map三维地图对象
let heatLayer_high

export const mapOptions = {
  scene: {
    center: { lat: 32.770407, lng: -79.978938, alt: 44564.6, heading: 330.1, pitch: -89.7 }
  }
}

export const eventTabel = new mars3d.BaseClass()

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.setOptions(mapOptions)
  addLayer()

  // globalNotify("已知问题提示", `(1) 开挖区域内矢量对象无法穿透进行拾取。 (2) 多个开挖区域距离太远时会存在误差。`)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (heatLayer_high) {
    heatLayer_high.remove()
    heatLayer_high = null
  }
  map = null
}

export function addLayer() {
  const tiles3dLayer = new mars3d.layer.TilesetLayer({
    id: "tileset-kejiyuan",
    name: "test",
    url: "https://tile.googleapis.com/v1/3dtiles/root.json?key=AIzaSyDTXbPV5vjBAwjN83TF0Wr6afPiusxzxGE"
  })
  map.addLayer(tiles3dLayer)
  map.flyTo(tiles3dLayer)
}

// export function addLayer() {
//   map.fixedLight = true // 固定光照，避免gltf模型随时间存在亮度不一致。

//   // 测试点数据，实际开发时换掉
//   // const arrPoints = getRandomPoints(30)

//   const arrPoints_high = getPoints_high()

//   // 热力图 图层
//   heatLayer_high = new mars3d.layer.HeatLayer({
//     positions: arrPoints_high,
//     // 以下为热力图本身的样式参数，可参阅api：https://www.patrick-wied.at/static/heatmapjs/docs.html
//     heatStyle: {
//       radius: 300,
//       blur: 1.0
//     },
//     // 以下为矩形矢量对象的样式参数
//     style: {
//       maxOpacity: 0.9,
//       minOpacity: 0.9,
//       // opacity: 0.7,
//       classificationType: mars3d.Cesium.ClassificationType.CESIUM_3D_TILE,
//       clampToGround: true
//     },
//     flyTo: false
//   })

//   map.addLayer(heatLayer_high)
// }

// // 获取bbox矩形区域内的count个随机点
// export function getRandomPoints(count) {

//   const xmin = -122.44381
//   const xmax = -122.37373
//   const ymin = 37.778046
//   const ymax = 37.808245

//   const arr = []
//   const arrPoint = turf.randomPoint(count, { bbox: [xmin, ymin, xmax, ymax] }).features // 随机点
//   for (let i = 0; i < arrPoint.length; i++) {
//     const item = arrPoint[i].geometry.coordinates
//     const val = Math.floor(Math.random() * 100) // 热力值

//     arr.push({ lng: item[0], lat: item[1], value: val })
//   }
//   return arr
// }

// export function getPoints_high() {
//   const arr = []
//   arr.push({ lng: -122.395128, lat: 37.794259, value: 60 })
//   arr.push({ lng: -122.395961, lat: 37.793594, value: 80 })
//   arr.push({ lng: -122.397427, lat: 37.792421, value: 82 })
//   arr.push({ lng: -122.399411, lat: 37.790863, value: 80 })
//   arr.push({ lng: -122.401573, lat: 37.789122, value: 80 })
//   arr.push({ lng: -122.403758, lat: 37.787418, value: 75 })
//   arr.push({ lng: -122.401925, lat: 37.793187, value: 60 })
//   arr.push({ lng: -122.399356, lat: 37.793411, value: 80 })
//   arr.push({ lng: -122.403619, lat: 37.79276, value: 78 })
//   arr.push({ lng: -122.401424, lat: 37.793006, value: 78 })
//   arr.push({ lng: -122.404415, lat: 37.790463, value: 60 })
//   arr.push({ lng: -122.399356, lat: 37.803411, value: 84.0 })

//   return arr
// }

import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
let skyline

export const mapOptions = {
  scene: {
    globe: {
      depthTestAgainstTerrain: true
    }
  }
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.setOptions(mapOptions)

  // 加个模型，观看效果更佳
  //   const tiles3dLayer = new mars3d.layer.TilesetLayer({
  //     type: "3dtiles",
  //     name: "县城社区",
  //     url: "//data.mars3d.cn/3dtiles/qx-shequ/tileset.json",
  //     position: { alt: 148.2 },
  //     maximumScreenSpaceError: 1,
  //     show: true
  //   })
  //   map.addLayer(tiles3dLayer)

  skyline = new mars3d.thing.Skyline()
  map.addThing(skyline)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (skyline) {
    skyline.remove()
    skyline = null
  }
  map = null
}

export function changeColor() {
  skyline.color = mars3d.Cesium.Color.fromRandom()
}

export function lineWidth(val) {
  skyline.width = val
}

export function isVChecked(value) {
  skyline.enabled = value
}

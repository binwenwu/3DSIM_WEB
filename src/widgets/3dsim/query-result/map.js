import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
}

let Layer1
let Layer2
let Layer3
let Layer4
let Layer5
/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (Layer1) {
    map.removeLayer(Layer1)
    map.removeLayer(Layer2)
    map.removeLayer(Layer3)
    map.removeLayer(Layer4)
    map.removeLayer(Layer5)
  }
  map = null
}

export function addLayer1() {
  console.log("addLayer1")
  Layer1 = new mars3d.layer.TilesetLayer({
    name: "武汉大学建筑模型",
    url: "./data/3dtiles/武汉大学建筑模型/part1.json",
    center: { lat: 30.451046, lng: 114.353052, alt: 10138.6, heading: 4.9, pitch: -45.8 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 4096,
    progressiveResolutionHeightFraction: 0.5,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: true,
    preferLeaves: true,
    preloadWhenHidden: true,
    skipLevelOfDetail: true,
    show: true,
    flyTo: true,
    popup: [
      { name: "编号", field: "id", unit: "" },
      { name: "名称", field: "layer_name", unit: "" }
    ],
    highlight: {
      type: "click",
      color: "#FFFF00",
      outlineEffect: true
    }
  })
  map.addLayer(Layer1)
}

export function addLayer2() {
  console.log("addLayer1")
  Layer2 = new mars3d.layer.TilesetLayer({
    name: "武汉大学建筑模型",
    url: "./data/3dtiles/武汉大学建筑模型/part2.json",
    center: { lat: 30.451046, lng: 114.353052, alt: 10138.6, heading: 4.9, pitch: -45.8 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 4096,
    progressiveResolutionHeightFraction: 0.5,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: true,
    preferLeaves: true,
    preloadWhenHidden: true,
    skipLevelOfDetail: true,
    show: true,
    flyTo: true,
    popup: [
      { name: "编号", field: "id", unit: "" },
      { name: "名称", field: "layer_name", unit: "" }
    ],
    highlight: {
      type: "click",
      color: "#FFFF00",
      outlineEffect: true
    }
  })
  map.addLayer(Layer2)
}

export function addLayer3() {
  console.log("addLayer1")
  Layer3 = new mars3d.layer.TilesetLayer({
    name: "武汉大学建筑模型",
    url: "./data/3dtiles/武汉大学建筑模型/part3.json",
    center: { lat: 30.451046, lng: 114.353052, alt: 10138.6, heading: 4.9, pitch: -45.8 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 4096,
    progressiveResolutionHeightFraction: 0.5,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: true,
    preferLeaves: true,
    preloadWhenHidden: true,
    skipLevelOfDetail: true,
    show: true,
    flyTo: true,
    popup: [
      { name: "编号", field: "id", unit: "" },
      { name: "名称", field: "layer_name", unit: "" }
    ],
    highlight: {
      type: "click",
      color: "#FFFF00",
      outlineEffect: true
    }
  })
  map.addLayer(Layer3)
}

export function addLayer4() {
  console.log("addLayer1")
  Layer4 = new mars3d.layer.TilesetLayer({
    name: "武汉大学建筑模型",
    url: "./data/3dtiles/武汉大学建筑模型/part4.json",
    center: { lat: 30.451046, lng: 114.353052, alt: 10138.6, heading: 4.9, pitch: -45.8 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 4096,
    progressiveResolutionHeightFraction: 0.5,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: true,
    preferLeaves: true,
    preloadWhenHidden: true,
    skipLevelOfDetail: true,
    show: true,
    flyTo: true,
    popup: [
      { name: "编号", field: "id", unit: "" },
      { name: "名称", field: "layer_name", unit: "" }
    ],
    highlight: {
      type: "click",
      color: "#FFFF00",
      outlineEffect: true
    }
  })
  map.addLayer(Layer4)
}

export function addLayer5() {
  console.log("addLayer1")
  Layer5 = new mars3d.layer.TilesetLayer({
    name: "武汉大学建筑模型",
    url: "./data/3dtiles/武汉大学建筑模型/part5.json",
    center: { lat: 30.451046, lng: 114.353052, alt: 10138.6, heading: 4.9, pitch: -45.8 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 4096,
    progressiveResolutionHeightFraction: 0.5,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: true,
    preferLeaves: true,
    preloadWhenHidden: true,
    skipLevelOfDetail: true,
    show: true,
    flyTo: true,
    popup: [
      { name: "编号", field: "id", unit: "" },
      { name: "名称", field: "layer_name", unit: "" }
    ],
    highlight: {
      type: "click",
      color: "#FFFF00",
      outlineEffect: true
    }
  })
  map.addLayer(Layer5)
}

export function removeLayer1() { 
  map.removeLayer(Layer1)
}
export function removeLayer2() {
  map.removeLayer(Layer2)
}
export function removeLayer3() {
  map.removeLayer(Layer3)
}
export function removeLayer4() {
  map.removeLayer(Layer4)
}
export function removeLayer5() {
  map.removeLayer(Layer5)
}

import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
let underground
let tiles3dLayer
let graphicModel


export const mapOptions = {
  scene: {
    orderIndependentTranslucency: false,
    contextOptions: { webgl: { alpha: true } }, // 允许透明，只能Map初始化传入 [关键代码]
    showMoon: false,
    showSkyBox: false,
    showSkyAtmosphere: false,
    fog: false,
    globe: {
      depthTestAgainstTerrain: true // 开启深度检测
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

  map.setCameraView({ lat: 31.840106, lng: 117.216768, alt: 554, heading: 0, pitch: -59 })
  map.container.style.backgroundColor = "#546a53" // 背景色

  //   globalNotify("已知问题提示", `(1) 启用透明度后，放大层级底图瓦片衔接处有黑色缝隙 `)
  addLayer()

  // tiles3dLayer.flyTo({
  //   radius: 1000, // 点数据：radius控制视距距离
  //   scale: 1.5, // 线面数据：scale控制边界的放大比例
  // })
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (underground) {
    underground.remove()
    underground = null
  }
  map.removeLayer(tiles3dLayer)
  // map.removeGraphic(graphicModel)
  map = null
}

function addLayer() {
  underground = new mars3d.thing.Underground({
    alpha: 0.5
  })
  map.addThing(underground)

  // 地下颜色的个性化处理
  // underground.color = Cesium.Color.BLACK
  // underground.colorAlphaByDistance = new Cesium.NearFarScalar(1000.0, 0.0, 1000000.0, 1.0) 

  // 加个模型
  tiles3dLayer = new mars3d.layer.TilesetLayer({
    name: "地下管网",
    url: "//data.mars3d.cn/3dtiles/max-piping/tileset.json",
    position: { lng: 117.215457, lat: 31.843363, alt: -3.6 },
    rotation: { z: 336.7 },
    maximumScreenSpaceError: 2,
    highlight: { type: "click", color: "#00FFFF" },
    popup: "all",
    center: { lat: 31.838081, lng: 117.216584, alt: 406, heading: 1, pitch: -34 }
  })
  map.addLayer(tiles3dLayer)

  // 创建矢量数据图层
  // const graphicLayer = new mars3d.layer.GraphicLayer()
  // map.addLayer(graphicLayer)

  // 黄色盒子
  // const graphic = new mars3d.graphic.BoxEntity({
  //   position: [117.218633, 31.843935, 41.43],
  //   style: {
  //     dimensions: new mars3d.Cesium.Cartesian3(40.0, 30.0, 50.0),
  //     fill: true,
  //     color: "#ffff00",
  //     opacity: 1
  //   }
  // })
  // graphicLayer.addGraphic(graphic)


  // 创建gltf模型
  // graphicModel = new mars3d.graphic.ModelEntity({
  //   position: [117.214494, 31.844015, 30],
  //   style: {
  //     // url: "//data.mars3d.cn/gltf/mars/firedrill/xiaofangche2.gltf",
  //     url: "/public/data/gltf/xiaofangche2.gltf",
  //     scale: 7,
  //     minimumPixelSize: 50
  //   }
  // })
  // graphicLayer.addGraphic(graphicModel)

}

// 俯视视角
export function centerAtDX1() {
  map.setCameraView({
    y: 31.840106,
    x: 117.216768,
    z: 554.36,
    heading: 0,
    pitch: -59.3,
    roll: 0
  })
}

// 地下视角1
export function centerAtDX2() {
  map.setCameraView({
    y: 31.841263,
    x: 117.21538,
    z: -13.35,
    heading: 40.6,
    pitch: 15.7,
    roll: 0.1
  })
}

// 地下视角2
export function centerAtDX3() {
  map.setCameraView({
    y: 31.838908,
    x: 117.217486,
    z: -63.75,
    heading: 349.2,
    pitch: 18.2,
    roll: 0
  })
}

// 透明度发生改变
export function opacityChange(value) {
  underground.alpha = value
}

// 复选框，是否开启地下模式
export function chkUnderground(value) {
  underground.enabled = value
}

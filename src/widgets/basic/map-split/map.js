import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
let mapSplit

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  createControl()

  // 加载模型图层 [也支持setLayerSplitDirection方法来设置图层]
  // const tiles3dLayer = new mars3d.layer.TilesetLayer({
  //   url: "//data.mars3d.cn/3dtiles/qx-dyt/tileset.json",
  //   position: { alt: -27 }
  // })
  // map.addLayer(tiles3dLayer)
  // mapSplit.setLayerSplitDirection(tiles3dLayer, Cesium.SplitDirection.RIGHT) // 对模型分屏卷帘
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  destroyControl()
  map = null
}

export function createControl() {
  if (mapSplit) {
    return
  }
  map.basemap = null
  mapSplit = new mars3d.control.MapSplit({
    rightLayer: [
      { name: "天地图卫星", type: "tdt", layer: "img_d" },
      {
        type: "3dtiles",
        name: "武汉大学全貌",
        url: "@src/../public/data/3dtiles/武汉大学全貌/tileset.json",
        maximumScreenSpaceError: 128,
        maximumMemoryUsage: 2048,
        progressiveResolutionHeightFraction: 0.5,
        dynamicScreenSpaceError: true,
        cullWithChildrenBounds: false,
        preferLeaves: true,
        preloadWhenHidden: true,
        skipLevelOfDetail: true,
        show: true,
        flyTo: true,
        popup: [{ name: "名称", field: "layer_name", unit: "" }],
        highligh: {
          type: "click",
          color: "#FFFF00",
          outlineEffect: true
        }
      }
    ],
    leftLayer: [
      { name: "天地图卫星", type: "tdt", layer: "img_d" },
      {
        type: "3dtiles",
        name: "武汉大学建筑模型",
        url: "@src/../public/data/3dtiles/武汉大学建筑模型/tileset.json",
        maximumScreenSpaceError: 128,
        maximumMemoryUsage: 2048,
        progressiveResolutionHeightFraction: 0.5,
        dynamicScreenSpaceError: true,
        cullWithChildrenBounds: false,
        preferLeaves: true,
        preloadWhenHidden: true,
        skipLevelOfDetail: true,
        show: true,
        flyTo: true,
        popup: [
          { name: "编号", field: "id", unit: "" },
          { name: "名称", field: "layer_name", unit: "" }
        ],
        highligh: {
          type: "click",
          color: "#FFFF00",
          outlineEffect: true
        }
      }
    ]
  })
  map.addControl(mapSplit)

  mapSplit.on(mars3d.EventType.mouseMove, function (event) {
    console.log("拖动了mapSplit控件", event)
  })

  window.mapSplit = mapSplit // only for test

  // 增加左右两图的标题
  const addHTML = `
    <div style="position: absolute;top: 85px;left: -335px;width: 300px;height: 48px;line-height: 48px;border-radius: 3px;background-color: rgba(0,0,0,.6);font-size: 16px;color: #fff;text-align: center;pointer-events: none;"> 左侧影像：武汉大学建筑白膜 </div>
    <div style="position: absolute;top: 85px;left: 45px;width: 300px;height: 48px;line-height: 48px;border-radius: 3px;background-color: rgba(0,0,0,.6);font-size: 16px;color: #fff;text-align: center;pointer-events: none;"> 右侧影像：武汉大学倾斜摄影测量 </div>
  `
  const splitter = mars3d.DomUtil.parseDom(addHTML, true)
  mapSplit.container.appendChild(splitter)
}

export function destroyControl() {
  if (mapSplit) {
    map.removeControl(mapSplit)
    mapSplit = null
    map.basemap = "天地图影像"
  }
}

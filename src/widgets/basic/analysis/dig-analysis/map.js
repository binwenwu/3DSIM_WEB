import * as mars3d from "mars3d"


export let map // mars3d.Map三维地图对象
let terrainClip

export const mapOptions = {
  scene: {
    center: { lat: 30.512842, lng: 114.35186, alt: 526.9, heading: 17.9, pitch: -41.9 }
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

  // globalNotify("已知问题提示", `(1) 开挖区域内矢量对象无法穿透进行拾取。 (2) 多个开挖区域距离太远时会存在误差。`)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (terrainClip) {
    terrainClip.remove()
    terrainClip = null
  }
  map = null
}

export function addTerrainClip(height) {
  terrainClip = new mars3d.thing.TerrainClip({
    diffHeight: height, // 井的深度
    image: "img/textures/poly-stone.jpg",
    imageBottom: "img/textures/poly-soil.jpg",
    splitNum: 80 // 井边界插值数
  })
  map.addThing(terrainClip)

  const areaItem = terrainClip.addArea(
    [
      [114.352516, 30.517302, 50.4],
      [114.35462, 30.517302, 45],
      [114.35462, 30.518753, 30.7],
      [114.352516, 30.518753, 45]
    ],
    { diffHeight: 60 }
  )
  addTableItem(areaItem)

  // const areaItem2 = terrainClip.addArea(
  //   [
  //     [116.416497, 30.934256, 775.89],
  //     [116.427392, 30.962941, 1084.88],
  //     [116.434838, 30.932608, 900.43],
  //     [116.462994, 30.923081, 771.42],
  //     [116.437571, 30.916044, 906.39],
  //     [116.44977, 30.894487, 776.06],
  //     [116.424183, 30.908752, 727.02],
  //     [116.402218, 30.898406, 593.08],
  //     [116.414309, 30.918806, 588.78],
  //     [116.387022, 30.933539, 700.65]
  //   ],
  //   { diffHeight: 200 }
  // )
  // addTableItem(areaItem2)
}

// 添加矩形
export function btnDrawExtent(isShow) {
  map.graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: "#007be6",
      opacity: 0.8
    },
    success: function (graphic) {
      // 绘制成功后回调
      const positions = graphic.getOutlinePositions(false)
      map.graphicLayer.clear()

      console.log(JSON.stringify(mars3d.LngLatArray.toArray(positions))) // 打印下边界

      // 挖地区域
      const areaItem = terrainClip.addArea(positions)
      addTableItem(areaItem, isShow)
    }
  })
}
// 添加多边形
export function btnDraw(isShow) {
  map.graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: "#007be6",
      opacity: 0.5,
      outline: false
    },
    success: function (graphic) {
      // 绘制成功后回调
      const positions = graphic.positionsShow
      map.graphicLayer.clear()

      console.log(JSON.stringify(mars3d.LngLatArray.toArray(positions))) // 打印下边界

      const areaItem = terrainClip.addArea(positions)
      addTableItem(areaItem, isShow)
    }
  })
}

// 清除
export function removeAll() {
  terrainClip.clear() // 清除挖地区域
  table = []
}

// 改变切割的深度
export function changeClipHeight(val) {
  terrainClip.diffHeight = val
}

// 是否挖地
export function chkClippingPlanes(val) {
  terrainClip.enabled = val
}

// 是否外切割
export function chkUnionClippingRegions(val) {
  terrainClip.clipOutSide = val
}

// 是否深度检测
export function chkTestTerrain(val) {
  map.scene.globe.depthTestAgainstTerrain = val
}

let table = []
// 区域表格添加一行记录
function addTableItem(item) {
  table.push({ key: item.id, name: "开挖区域" + item.id })

  eventTabel.fire("tableObject", { table })
}
export function changeTable(data) {
  table = data
}

// 表格操作
export function flyToGraphic(item) {
  const graphic = terrainClip.getAreaById(item)
  map.flyToPositions(graphic.positions)
}

export function deletedGraphic(item) {
  const graphic = terrainClip.getAreaById(item)
  terrainClip.removeArea(graphic)
}

export function showHideArea(id, selected) {
  if (selected) {
    terrainClip.showArea(id)
  } else {
    terrainClip.hideArea(id)
  }
}

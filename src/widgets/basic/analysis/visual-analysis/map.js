import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
export let graphicLayer

// 事件对象，用于抛出事件给面板
export const eventTarget = new mars3d.BaseClass()

export const mapOptions = {
  scene: {
    fxaa: true, // 不开启抗锯齿，可视域会闪烁
    globe: {
      depthTestAgainstTerrain: true // 不加无法投射到地形上
    }
  }
}

export const mars3d1 = mars3d
/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.setOptions(mapOptions)

  // globalNotify("已知问题提示", `(1) 平面上视域内可能存在锯齿。(2) 视角变化时可能有锯齿抖动。`)

  // 添加参考三维模型
  // const tiles3dLayer = new mars3d.layer.TilesetLayer({
  //   url: "//data.mars3d.cn/3dtiles/qx-shequ/tileset.json",
  //   position: { alt: 148.2 },
  //   maximumScreenSpaceError: 1,
  //   dynamicScreenSpaceError: true,
  //   cullWithChildrenBounds: false,
  //   luminanceAtZenith: 0.6
  // })
  // map.addLayer(tiles3dLayer)

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 添加示例数据
  // addDemoGraphic()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (graphicLayer) {
    graphicLayer.remove()
    graphicLayer = null
  }
  eventTarget.off()
  map = null
}

function addDemoGraphic() {
  const viewShed = new mars3d.graphic.ViewShed({
    position: [114.355739, 30.527698, 31.8],
    // position: [119.480878, 28.440286, 90],
    style: {
      angle: 60,
      angle2: 45,
      distance: 155,
      heading: 275,
      pitch: -12,
      addHeight: 0.5
    }
  })
  graphicLayer.addGraphic(viewShed)
}

// 添加可视域
export function startDrawGraphic() {
  // 开始绘制
  graphicLayer.startDraw({
    type: "viewShed",
    style: {
      angle: 60,
      angle2: 45,
      distance: 80,
      heading: 44,
      pitch: -12,
      addHeight: 0.5 // 在坐标点增加的高度值，规避遮挡，效果更友好
    }
  })
}

// 生成演示数据(测试数据量)
export function addRandomGraphicByCount(count) {
  graphicLayer.clear()
  graphicLayer.enabledEvent = false // 关闭事件，大数据addGraphic时影响加载时间


  // 生成演示数据的范围（左下角，右上角）
  const bbox = [114.350804, 30.52809, 114.359404, 30.535617]

  /**
   * 在 指定bbox区域 内生成 指定数量(概略) 的网格坐标点，
   * 目前常用于生成坐标点，测试数据量
   * @function getGridPoints
   * @param bbox - 区域范围，如：[116.984788, 31.625909, 117.484068, 32.021504]
   * @param count - 数量(概略)，返回坐标接近此数字
   * @param [alt = 0] - 高度值
   * @returns 坐标集合 ,如： {points:[LngLatPoint,LngLatPoint], size: 500 }
   */
  const result = mars3d.PolyUtil.getGridPoints(bbox, count, 25.0)

  console.log("生成的测试网格坐标", result)

  for (let j = 0; j < result.points.length; ++j) {
    const position = result.points[j]
    const index = j + 1

    const graphic = new mars3d.graphic.ViewShed({
      position: position,
      style: {
        angle: 60,
        angle2: 45,
        distance: 80,
        heading: 44,
        pitch: -12,
        addHeight: 0.5
      },
      attr: { index: index }
    })
    graphicLayer.addGraphic(graphic)
  }

  graphicLayer.enabledEvent = true // 恢复事件
  return result.points.length
}

// 属性编辑
let selectedView
export function getGraphic(graphicId) {
  selectedView = graphicLayer.getGraphicById(graphicId)
  return selectedView
}

export function selCamera() {
  if (!selectedView) {
    return
  }

  map.graphicLayer.startDraw({
    type: "point",
    success: (graphic) => {
      const point = graphic.point
      graphic.remove() // 删除绘制的点

      selectedView.position = point
    }
  })
}

// 修改水平角度
export function onChangeAngle(value) {
  if (selectedView) {
    selectedView.angle = value
  }
}

// 修改垂直角度
export function onChangeAngle2(value) {
  if (selectedView) {
    selectedView.angle2 = value
  }
}

// 修改投射距离
export function onChangeDistance(value) {
  if (selectedView) {
    selectedView.distance = value
  }
}

// 修改四周距离 value 修改后的数值
export function onChangeHeading(value) {
  if (selectedView) {
    selectedView.heading = value
  }
}

//  修改俯仰角数值   value 修改后的数值
export function onChangePitch(value) {
  if (selectedView) {
    selectedView.pitch = value
  }
}

//   线框是否显示   isCheckde 修改后的数值
export function showFrustum(isCheckde) {
  if (selectedView) {
    selectedView.showFrustum = isCheckde
  }
}

// 修改视频的透明度   opacity 透明度数值
export function onChangeOpacity(opacity) {
  if (selectedView) {
    selectedView.opacity = opacity
  }
}

// 四周视角选点
export function onClickSelView() {
  if (!selectedView) {
    return
  }

  map.graphicLayer.startDraw({
    type: "point",
    success: (graphic) => {
      const point = graphic.point
      graphic.remove() // 删除绘制的点

      selectedView.targetPosition = point
    }
  })
}

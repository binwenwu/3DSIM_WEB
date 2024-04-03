import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
let measure
let measureVolume

export const mapOptions = {
  scene: {
    globe: { depthTestAgainstTerrain: true }
  }
}

export const eventTarget = new mars3d.BaseClass() // 事件对象，用于抛出事件到面板中

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.setOptions(mapOptions)
  addMeasure()
}


/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  if (measure) {
    measure.remove()
    measure = null
  }
  if (measureVolume) {
    measureVolume.remove()
    measureVolume = null
  }
  eventTarget.off()
  map = null
}


function addMeasure() {
  measure = new mars3d.thing.Measure({
    label: {
      color: "#ffffff",
      font_family: "楷体",
      font_size: 20
    }
  })
  map.addThing(measure)

  measure.on(mars3d.EventType.start, function (event) {
    console.log("开始分析", event)
    clearInterResult()
    window.showLoading()
    console.log("坐标为", JSON.stringify(mars3d.LngLatArray.toArray(event.positions))) // 方便测试拷贝坐标
  })

  measure.on(mars3d.EventType.end, function (event) {
    console.log("分析完成", event)
    window.hideLoading()
  })

  // 加一些演示数据
  //   setTimeout(() => {
  //     addDemoGraphic(measure.graphicLayer)
  //   }, 3000)

  // 有模型时
  // tiles3dLayer.readyPromise.then((layer) => {
  //   // 关键代码,等模型readyPromise加载后执行volume
  //   addDemoGraphic1(measure.graphicLayer)
  // })
}

// 添加演示数据
function addDemoGraphic(graphicLayer) {
  const graphic = new mars3d.graphic.VolumeMeasure({
    splitNum: 6,
    height: 450,
    positions: [
      [116.191817, 30.864845, 309.3],
      [116.192869, 30.8757, 521.81],
      [116.190478, 30.886266, 672.79],
      [116.19247, 30.893748, 448.91],
      [116.200836, 30.889954, 379.92],
      [116.204063, 30.882578, 532.5],
      [116.203027, 30.873828, 498.8],
      [116.201795, 30.865941, 443.06]
    ],
    style: {
      width: 5,
      color: "#3388ff"
    },
    attr: { remark: "示例1" }
  })
  graphic.on(mars3d.EventType.end, function () {
    showHeightVal()
  })
  graphicLayer.addGraphic(graphic)

  measureVolume = graphic
}

// 点选高度
function showHeightVal() {
  const baseHeight = measureVolume.height.toFixed(1)
  const minHeight = measureVolume.minHeight.toFixed(1)
  const maxHeight = getFixedNum(measureVolume.maxHeight)

  // 触发自定义事件 heightVal ，改变组件面板中的值
  eventTarget.fire("heightVal", { baseHeight, minHeight, maxHeight })
}

function getFixedNum(val) {
  return Math.ceil(val * 10) / 10
}

// 方量分析
export function analysisMeasure() {
  // 手动绘制的方式分析
  measure
    .volume({
      splitNum: 6, // 面内插值次数，控制精度[注意精度越大，分析时间越长]
      // minHeight: 50 , //可以设置一个固定的最低高度
      exact: false // 是否进行精确计算， 传false时是否快速概略计算方式，该方式计算精度较低，但计算速度快，仅能计算在当前视域内坐标的高度
    })
    .then((e) => {
      measureVolume = e
      showHeightVal()
    })
}

// 清除
export function clear() {
  measure.clear()
  measureVolume = null
  clearInterResult()
}

export function showResult(reslut) {
  if (reslut && measureVolume && measureVolume.interPolygonObj) {
    showInterResult(measureVolume.interPolygonObj.list)
    return true
  } else {
    clearInterResult()
    return false
  }
}

// 修改基础高度
export function baseHeight(num) {
  measureVolume.height = num
  showHeightVal()
}

// 修改底高
export function txtMinHeight(num) {
  if (num > measureVolume.height) {
    window.globalMsg("墙底部高度不能高于基准面高")
    return
  }
  measureVolume.minHeight = num
}

// 修改顶高
export function txtMaxHeight(num) {
  const maxHeight = getFixedNum(measureVolume.polygonMaxHeight)
  if (num < maxHeight) {
    window.globalMsg("墙顶部高度不能低于区域内的地表高" + maxHeight)
    measureVolume.maxHeight = Number(maxHeight)
    return
  }
  if (num < measureVolume.height) {
    window.globalMsg("墙顶部高度不能低于基准面高")
    return
  }
  measureVolume.maxHeight = num
}

export function selHeight() {
  if (!measureVolume || !measure) {
    window.globalMsg("请先开始方量分析")
    return
  }

  // 拾取高度
  map.graphicLayer.startDraw({
    type: "point",
    style: {
      color: "#00fff2"
    },
    success: (graphic) => {
      const height = graphic.point?.alt
      map.graphicLayer.removeGraphic(graphic)

      if (!height) {
        return
      }

      measureVolume.height = height

      showHeightVal(height)
    }
  })
}

// 显示mars3d.polygon.interPolygon处理后的面内插值分析结果，主要用于测试对比

// 显示面的插值计算结果，方便比较分析
let interGraphicLayer

function clearInterResult() {
  if (!interGraphicLayer) {
    interGraphicLayer = new mars3d.layer.GraphicLayer()
    map.addLayer(interGraphicLayer)
  }

  interGraphicLayer.clear()
}

function showInterResult(list) {
  // 分析结果用于测试分析的，不做太多处理，直接清除之前的，只保留一个
  clearInterResult()

  let pt1, pt2, pt3
  // var geometryInstances = [];
  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]

    pt1 = item.point1.pointDM
    pt2 = item.point2.pointDM
    pt3 = item.point3.pointDM

    // 点
    for (const pt of [item.point1, item.point2, item.point3]) {
      const graphic = new mars3d.graphic.PointPrimitive({
        position: pt.pointDM,
        style: {
          pixelSize: 9,
          color: mars3d.Cesium.Color.fromCssColorString("#ff0000").withAlpha(0.5)
        }
      })
      interGraphicLayer.addGraphic(graphic)

      graphic.bindTooltip("点高度:" + mars3d.MeasureUtil.formatDistance(pt.height))
    }

    // 横截面面积
    item.area = item.area || mars3d.MeasureUtil.getTriangleArea(pt1, pt2, pt3)

    // 三角网及边线
    const positions = [pt1, pt2, pt3, pt1]

    // 三角网面（单击用）
    const primitivePoly = new mars3d.graphic.PolygonPrimitive({
      positions: positions,
      style: {
        color: mars3d.Cesium.Color.fromCssColorString("#ffffff").withAlpha(0.01)
      }
    })
    interGraphicLayer.addGraphic(primitivePoly)
    primitivePoly.bindTooltip("三角面积:" + mars3d.MeasureUtil.formatArea(item.area) + "(第" + i + "个)")

    // 三角网边线
    const primitiveLine = new mars3d.graphic.PolylinePrimitive({
      positions: positions,
      style: {
        width: 1,
        color: mars3d.Cesium.Color.fromCssColorString("#ffff00").withAlpha(0.3)
      }
    })
    interGraphicLayer.addGraphic(primitiveLine)
  }
}

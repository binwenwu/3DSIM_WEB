<!-- 图上量算 -->
<template>
  <mars-dialog title="图上量算" :visible="true" right="10" top="85" width="340" height="460">
    <div class="mars-dialog__content">
      <div class="f-mb measure">
        <template v-for="(item, i) in data" :key="i">
          <div class="tool">
            <div class="tool-thum" @click="switchMeasure(item.method)" :style="{ background: `rgb(${item.rgb[0]}, ${item.rgb[1]}, ${item.rgb[2]})` }">
              <img class="tool-thum_img" :src="item.icon" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </template>

        <div>
          <a-checkbox @change="isChecked" v-model:checked="checked">仅测量模型(不拾取地形)</a-checkbox>
        </div>

        <div>
          <mars-button @click="clear" width="100%" style="margin-right: 10px; margin-top: 10px; width: 250px; border-radius: 4px"
            >清空测量数据</mars-button
          >
        </div>
      </div>
    </div>
    <!-- Ecahrt图表(剖面分析) -->
    <mars-dialog title="剖面分析" v-model:visible="isShow" :left="70" :right="240" :bottom="40">
      <div class="echatsView">
        <div id="echartsView1" style="width: 100%; height: 100%"></div>
      </div>
    </mars-dialog>
  </mars-dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import * as echarts from "echarts"

// 仅测量模型(不拾取地形) - 单选框
const checked = ref(false)

// 启用map.ts生命周期
useLifecycle(mapWork)

// 控制Echarts图表显示
const isShow = ref<boolean>(false)
let myChart: echarts.ECharts

// 图表自适应
window.onresize = function () {
  myChart.resize()
}

const data = [
  { name: "空间距离", icon: "./img/measure-length-bec89d4f.svg", rgb: [221, 117, 27], method: "measureLength" },
  { name: "水平面积", icon: "./img/measure-area-b54c57a3.svg", rgb: [61, 227, 244], method: "measureArea" },
  { name: "高度差", icon: "./img/measure-height-2b7aa869.svg", rgb: [85, 213, 160], method: "measureHeight" },
  { name: "坐标测量", icon: "./img/measure-coor-f8425647.svg", rgb: [186, 188, 49], method: "measurePoint" },
  { name: "贴地距离", icon: "./img/measure-length-bec89d4f.svg", rgb: [221, 117, 27], method: "measureSurfaceLength" },
  { name: "贴地面积", icon: "./img/measure-area-b54c57a3.svg", rgb: [192, 146, 254], method: "measureSurfaceeArea" },
  { name: "三角测量", icon: "./img/measure-height-sup-4927ef76.svg", rgb: [55, 188, 65], method: "measureTriangleHeight" },
  { name: "方位角", icon: "./img/measure-angle-d6f4970b.svg", rgb: [149, 211, 51], method: "measureAngle" },
  { name: "剖面分析", icon: "./img/measure-section-e36c0150.svg", rgb: [136, 184, 255], method: "measureSection" }
]

onMounted(() => {
  myChart = echarts.init(document.getElementById("echartsView1")!)
})

mapWork.eventTarget.on("measureEnd", function (event: any) {
  isShow.value = true
  nextTick(() => {
    setEchartsData(event)
  })
})

mapWork.eventTarget.on("measureClick", function (event: any) {
  if (event.value) {
    nextTick(() => {
      setEchartsData(event.value)
    })
  }
})

// 匹配测量方法
const switchMeasure = (item: any) => {
  switch (item) {
    case "measureLength":
      measureLength()
      break
    case "measureArea":
      measureArea()
      break
    case "measureHeight":
      measureHeight()
      break
    case "measurePoint":
      measurePoint()
      break
    case "measureSurfaceLength":
      measureSurfaceLength()
      break
    case "measureSurfaceeArea":
      measureSurfaceeArea()
      break
    case "measureTriangleHeight":
      measureTriangleHeight()
      break
    case "measureAngle":
      measureAngle()
      break
    case "measureSection":
      measureSection()
      break
  }
}

// 空间距离
const measureLength = () => {
  mapWork.measureLength()
}
// 水平面积
const measureArea = () => {
  mapWork.measureArea()
}

// 高度差
const measureHeight = () => {
  mapWork.measureHeight()
}

// 坐标测量
const measurePoint = () => {
  mapWork.measurePoint()
}

// 贴地距离
const measureSurfaceLength = () => {
  mapWork.measureSurfaceLength()
}

// 贴地面积
const measureSurfaceeArea = () => {
  mapWork.measureSurfaceeArea()
}

// 三角测量
const measureTriangleHeight = () => {
  mapWork.measureTriangleHeight()
}
// 方位角
const measureAngle = () => {
  mapWork.measureAngle()
}

// 剖面分析
const measureSection = () => {
  mapWork.measureSection()
}

const isChecked = () => {
  mapWork.onlyPickModelPosition(checked.value)
}

// 清空测量数据
const clear = () => {
  mapWork.removeAll()
  isShow.value = false
  myChart.clear()
}

// 设置Echarts图表数据
function setEchartsData(data: any) {
  if (data == null || data.arrPoint == null) {
    return
  }
  const arrPoint = data.arrPoint
  let inhtml = ""

  const option = {
    grid: {
      left: 10,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50
      }
    ],
    tooltip: {
      trigger: "axis",
      // position: function (point, params, dom, rect, size) {
      //    return [10, 20];
      // },
      formatter: (params: any) => {
        if (params.length === 0) {
          mapWork.hideTipMarker()
          return inhtml
        }

        const hbgd = params[0].value // 海拔高度
        const point = arrPoint[params[0].dataIndex] // 所在经纬度
        const result = mapWork.calculation(params[0])

        inhtml = `当前位置<br />
                      距起点：${result.len}<br />
                      海拔：<span style='color:${params[0].color};'>${result.hbgdStr}</span><br />
                      经度：${point.lng}<br />
                      纬度：${point.lat}`

        mapWork.showTipMarker(point, hbgd, inhtml)

        return inhtml
      }
    },
    xAxis: [
      {
        name: "行程",
        type: "category",
        nameTextStyle: { color: "rgb(255, 70, 131)" },
        boundaryGap: false,
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          formatter: "{value} 米",
          color: "#fff"
        },
        data: data.arrLen
      }
    ],
    yAxis: [
      {
        name: "高程",
        nameTextStyle: { color: "rgb(255, 70, 131)" },
        type: "value",
        min: getMinZ(arrPoint),
        axisLabel: {
          formatter: "{value} 米",
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "高程值",
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          normal: {
            color: "rgb(255, 70, 131)"
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 158, 68)"
              },
              {
                offset: 1,
                color: "rgb(255, 70, 131)"
              }
            ])
          }
        },
        data: data.arrHB
      }
    ]
  }

  myChart.setOption(option)
  myChart.resize()
}

// 获取最小高程
function getMinZ(arr: any) {
  let minz = "dataMin"
  if (arr == null || arr.length === 0) {
    return minz
  }

  minz = arr[0].alt
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].alt < minz) {
      minz = arr[i].alt
    }
  }
  return minz
}
</script>

<style scoped lang="less">
.mars-dialog .mars-dialog__content[data-v-0a5fe581] {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 5px;
}

.measure {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 20px;
}

.tool {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  height: 96px;
  box-sizing: border-box;
  margin: 0 30px 10px 0;
  text-align: center;
  padding-top: 12px;
}

.tool .tool-thum {
  transition: all 0.2s ease;
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: #fd960f;
}

.tool .tool-thum .tool-thum_img {
  width: 24px;
  height: 24px;
  margin: 13px;
}

.echatsView {
  width: 100%;
  height: 240px;
}
</style>

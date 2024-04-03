/**
 * index页面的widget配置
 * @copyright 武汉大学 mars3d.cn
 * @author tankenqi 2022-02-19
 */
import { defineAsyncComponent, markRaw } from "vue"
import { WidgetState } from "@mars/common/store/widget"
import { StoreOptions } from "vuex"

const store: StoreOptions<WidgetState> = {
  state: {
    widgets: [
      { // POI查询
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/query-poi/index.vue"))),
        name: "query-poi",
        autoDisable: true
      },
      { // 右下角工具栏
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/toolbar/index.vue"))),
        name: "toolbar",
        autoDisable: true
      },
      // { // 底图管理
      //   component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-basemap/index.vue"))),
      //   name: "manage-basemap",
      //   group: "manage"
      // },
      { // 图层管理
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/index.vue"))),
        name: "manage-layers",
        group: "manage",
        disableOther: ["roamLine"]
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-tree.vue"))),
        name: "layer-tree"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-picture-heatmap.vue"))),
        name: "layer-picture-heatmap"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/layer-picture-guihua.vue"))),
        name: "layer-picture-guihua"
      },
      { // 坐标定位
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/location-point/index.vue"))),
        name: "location-point",
        group: "tools"
      },
      { // 图上量算
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/measure/index.vue"))),
        name: "measure",
        group: "tools"
      },
      { // 空间分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/index.vue"))),
        name: "analysis",
        group: "tools"
      },
      { // 日照分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/sunshine-analysis/index.vue"))),
        name: "sunshine-analysis"
      },
      { // 可视域分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/visual-analysis/index.vue"))),
        name: "visual-analysis"
      },
      { // 方量分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/volume-analysis/index.vue"))),
        name: "volume-analysis"
      },
      { // 地形开挖
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/dig-analysis/index.vue"))),
        name: "dig-analysis" 
      },
      { // 地表透明
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/surface-transparency/index.vue"))),
        name: "surface-transparency"
      },
      { // 坡度坡向分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/slope-aspect/index.vue"))),
        name: "slope-aspect"
      },
      { // 淹没分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/inundation-analysis/index.vue"))),
        name: "inundation-analysis"
      },
      { // 开敞度分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/openness-analysis/index.vue"))),
        name: "openness-analysis"
      },
      { // 天际线分析
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/analysis/skyline-analysis/index.vue"))),
        name: "skyline-analysis"
      },
      { // 图上标绘
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/plot/index.vue"))),
        name: "plot",
        group: "tools"
      },
      { // 卷帘对比
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/map-split/index.vue"))),
        name: "map-split",
        group: "tools"
      },
      { // 图层编辑
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/graphic-editor/index.vue"))),
        name: "graphic-editor"
      }
    ],
    openAtStart: ["query-poi", "toolbar"]
  }
}

export default store

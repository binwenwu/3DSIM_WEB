import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d-cesium"
import "mars3d/dist/mars3d.css"
import "mars3d"
import "@mars/assets/style/index.less"
import "@icon-park/vue-next/styles/index.css"

import TinyVue from "@opentiny/vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { createApp } from "vue"
import Application from "./App.vue"
import { injectState, key } from "@mars/common/store/widget"
import { store as testStore, key as testKey } from "@mars/common/store/test"
import store from "./widget-store"
import MarsUI from "@mars/components/mars-ui"
import { router } from "./routes"
import "@mars/components/mars-ui/common"


const app = createApp(Application)
app.use(MarsUI)
app.use(router)
app.use(injectState(store), key)
app.use(testStore, testKey)
app.use(TinyVue) // 一套跨端、跨框架的企业级 UI 组件库，支持 Vue 2 和 Vue 3，支持 PC 端和移动端
app.use(ElementPlus) // 一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库
app.mount("#app")



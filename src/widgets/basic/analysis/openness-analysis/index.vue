<template>
  <mars-dialog title="开敞度分析" :visible="true" right="12" top="85">
    <!-- 返回 -->
    <el-button :icon="Back" size="small" @click="comeBack" circle />
    <!-- 下划线 -->
    <div class="dashed-line"></div>
    <graphic-layer-state :defaultCount="10" :interaction="false" />
  </mars-dialog>
</template>

<script lang="ts" setup>
import GraphicLayerState from "@mars/components/mars-sample/graphic-layer-state.vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { Back } from "@element-plus/icons-vue"
import { useWidget } from "@mars/common/store/widget"

const { activate, disable } = useWidget()

window.mapWork = mapWork
// 启用map.ts生命周期
useLifecycle(mapWork)

const comeBack = () => {
  disable("openness-analysis")
  activate("analysis")
}
</script>
<style scoped lang="less">
.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}
</style>

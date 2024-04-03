<template>
  <mars-dialog title="天际线分析" :visible="true" right="10" top="85">
    <!-- 返回 -->
    <el-button :icon="Back" size="small" @click="comeBack" circle />
    <!-- 下划线 -->
    <div class="dashed-line"></div>
    <div class="f-mb">
      <a-checkbox @change="isVChecked" v-model:checked="checked">开启天际线</a-checkbox>
    </div>

    <a-space>
      <span>线宽(像素):</span>
      <mars-input-number @change="lineWidth" v-model:value="value" :min="1" :max="10" />
      <mars-button @click="changeColor">换色</mars-button>
    </a-space>
  </mars-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { Back } from "@element-plus/icons-vue"
import { useWidget } from "@mars/common/store/widget"

const { activate, disable } = useWidget()
// 启用map.ts生命周期
useLifecycle(mapWork)

const value = ref<number>(3)
const checked = ref(true)

// 换色
const changeColor = () => {
  mapWork.changeColor()
}

// 线宽
const lineWidth = () => {
  mapWork.lineWidth(value.value)
}

const isVChecked = () => {
  mapWork.isVChecked(checked.value)
}

const comeBack = () => {
  disable("skyline-analysis")
  activate("analysis")
}
</script>
<style scoped lang="less">
.ant-input-number {
  width: 60px !important;
}

.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}
</style>

<template>
  <mars-dialog title="坡度坡向分析" :visible="true" right="10" top="85">
    <!-- 返回 -->
    <el-button :icon="Back" size="small" @click="comeBack" circle />
    <!-- 下划线 -->
    <div class="dashed-line"></div>
    <a-form>
      <a-form-item label="插值数">
        <a-space>
          <mars-input-number v-model:value="txtSplitNum" :step="1" :min="1" :max="999" />
          <mars-button @click="btnDrawExtent">添加矩形</mars-button>
          <mars-button @click="btnDraw">添加多边形</mars-button>
          <mars-button @click="btnDrawPoint">添加点</mars-button>
          <mars-button @click="clearAll">清除</mars-button>
        </a-space>
      </a-form-item>

      <a-form-item label="地表渲染">
        <a-radio-group v-model:value="radio" @change="changeShadingType">
          <a-radio value="none">无阴影</a-radio>
          <a-radio value="slope">坡度</a-radio>
          <a-radio value="aspect">坡向</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </mars-dialog>
</template>

<script setup lang="ts">
import { ref, toRaw } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { Back } from "@element-plus/icons-vue"
import { useWidget } from "@mars/common/store/widget"

// 启用map.ts生命周期
useLifecycle(mapWork)

const { activate, disable } = useWidget()

const txtSplitNum = ref(10)
const radio = ref("none")

// 添加矩形
const btnDrawExtent = () => {
  mapWork.btnDrawExtent(toRaw(txtSplitNum.value))
}
// 添加多边形
const btnDraw = () => {
  mapWork.btnDraw(toRaw(txtSplitNum.value))
}
// 添加点
const btnDrawPoint = () => {
  mapWork.btnDrawPoint()
}
// 清除
const clearAll = () => {
  mapWork.clearAll()
}

// 改变阴影
const changeShadingType = () => {
  mapWork.changeShadingType(toRaw(radio.value))
}

const comeBack = () => {
  disable("slope-aspect")
  activate("analysis")
}
</script>
<style scoped lang="less">
.ant-input-number {
  width: 70px !important;
}

.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}
</style>

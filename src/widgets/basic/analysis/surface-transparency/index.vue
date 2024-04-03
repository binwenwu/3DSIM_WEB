<template>
  <mars-dialog title="地表透明" :visible="true" right="10" top="85">
    <!-- 返回 -->
    <el-button :icon="Back" size="small" @click="comeBack" circle />
    <!-- 下划线 -->
    <div class="dashed-line"></div>
    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">状态:</span>
        <a-checkbox @change="isChecked" v-model:checked="checked">开启地下模式</a-checkbox>
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">地表透明度:</span>
        <mars-slider @change="opacityChange" v-model:value="inputValue" :min="0" :max="1" :step="0.1" />
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">演示视角:</span>
        <mars-button @click="centerAtDX1">俯视视角</mars-button>
        <mars-button @click="centerAtDX2">地下视角1</mars-button>
        <mars-button @click="centerAtDX3">地下视角2</mars-button>
      </a-space>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { useWidget } from "@mars/common/store/widget"
import { Back } from "@element-plus/icons-vue"

const { activate, disable } = useWidget()

// 启用map.ts生命周期
useLifecycle(mapWork)

const inputValue = ref<number>(0.5)
const checked = ref(true)

// 俯视视角
const centerAtDX1 = () => {
  mapWork.centerAtDX1()
}

// 地下视角1
const centerAtDX2 = () => {
  mapWork.centerAtDX2()
}

// 地下视角2
const centerAtDX3 = () => {
  mapWork.centerAtDX3()
}

// 透明度发生改变
const opacityChange = () => {
  mapWork.opacityChange(inputValue.value)
}

const isChecked = () => {
  mapWork.chkUnderground(checked.value)
}

const comeBack = () => {
  disable("surface-transparency")
  activate("analysis")
}
</script>
<style scoped lang="less">
.mars-pannel-item-label {
  width: 74px;
}
.ant-slider {
  width: 160px;
}

.dashed-line {
  margin: 10px auto;
  border: 1px dashed white; /* 虚线的宽度和颜色 */
  width: 100%; /* 元素的宽度 */
  height: 0; /* 元素的高度 */
}
</style>

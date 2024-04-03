<template>
  <mars-dialog title="卷帘对比" :visible="true" right="10" top="85">
    <a-space>
      <mars-button @click="createMap">创建控件</mars-button>
      <mars-button @click="destroyMap">销毁控件</mars-button>
    </a-space>
  </mars-dialog>
</template>

<script lang="ts" setup>
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"

// 启用map.ts生命周期
useLifecycle(mapWork)

// 创建地图
const createMap = () => {
  mapWork.createControl()
}
// 销毁地图
const destroyMap = () => {
  mapWork.destroyControl()
}
</script>

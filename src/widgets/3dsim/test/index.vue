<template>
    <div class="divPanel">
    <!-- <img style="width: 40px; height: 180px" src="/img/heatmap.png" /> -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue"
import type { UnwrapRef } from "vue"
import * as mapWork from "./map.js"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { Back } from "@element-plus/icons-vue"
import { useWidget } from "@mars/common/store/widget"

// 启用map.ts生命周期
useLifecycle(mapWork)

</script>
<style scoped lang="less">
.divPanel {
  position: absolute;
  bottom: 40px;
  right: 20px;
}
</style>

<template>
  <mars-dialog icon="view-list" title="Detail information of scene" width="520" top="85" left="600" style="margin: 0 auto" :min-width="357">
    <mars-table size="large" :columns="columns" :dataSource="dataSource" bordered>
      <template #bodyCell="{ text }">
        <span>{{ text }}</span>
      </template>
    </mars-table>
  </mars-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import axios from "axios"
import type { GuiItem } from "@mars/components/mars-ui/mars-gui"
import { log } from "console"
import { stringifyQuery } from "vue-router"
import { useWidget } from "@mars/common/store/widget"
import { TableColumnType, TableProps } from "ant-design-vue"
const { activate, disable, isActivate, updateWidget, currentWidget } = useWidget()


interface sceneDetailInfo {
  assetId: string
  assetType: string
  feature: string
  product: string
  validTimeSpan: Array<string>
  creationDate: string
  version: string
  boundingVolume: Array<number>
  genericName: string
}


const columns = [
  {
    title: "Attribute",
    dataIndex: "attribute",
    key: "attribute"
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value"
  }
]

const dataSource = ref([])

let sceneDetail

onMounted(() => {
  sceneDetail = currentWidget.data.sceneDetail
  dataSource.value = Object.keys(sceneDetail).map((key) => ({
    attribute: key,
    value: sceneDetail[key]
  }))
})

if (currentWidget) {
  currentWidget.onUpdate((e) => {
    sceneDetail = e.data.sceneDetail
    dataSource.value = Object.keys(sceneDetail).map((key) => ({
      attribute: key,
      value: sceneDetail[key]
    }))
  })
}

</script>
<style lang="less" scoped>
.form-container {
  padding-top: 10px;
  margin-right: 5px;
}
:deep(.mars-input) {
  max-width: 310px;
}
</style>

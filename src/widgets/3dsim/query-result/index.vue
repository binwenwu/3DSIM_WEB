<template>
  <mars-dialog title="Query Result" width="430" top="85" right="10" :min-width="357">
    <mars-table size="small" bordered :pagination="{ pageSize: 5 }" :columns="columns" :dataSource="assetsList" rowKey="assetId">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
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

const { currentWidget } = useWidget()


interface typhoon {
  id: number
  name_en: string
  name_cn: string
  typnumber: string
  state: string
}

interface detailInfo {
  assetId: string
  assetType: string
  feature: string
  product: string
  validTimeSpan: Array<string>
  creationDate: string
  version: string
  boundingVolume: Array<number>
}

interface briefInfo {
  assetId: string
  assetType: string
}


let assets

onMounted(() => {
  assets = currentWidget.data.assets
  assetsList.value = assets
})

if (currentWidget) {
  currentWidget.onUpdate((e) => {
    assets = e.data.assets
    assetsList.value = assets
  })
}


const columns: TableColumnType[] = [
  {
    title: "assetId",
    dataIndex: "assetId",
    key: "assetId"
  },
  {
    title: "assetType",
    dataIndex: "assetType"
  }
]


const assetsList = ref<briefInfo[]>([])


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

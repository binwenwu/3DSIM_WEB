<template>
  <mars-dialog icon="view-list" title="Detail information of scene" width="520" top="85" left="600" style="margin: 0 auto" :min-width="357">
    <mars-table size="large" :columns="columns" :dataSource="dataSource" bordered>
      <template #bodyCell="{ record, column }">
        <template v-if="record.attribute === 'assetId'">
          <span>{{ storeAssetId(record[column.dataIndex]) }}</span>
        </template>
        <template v-else-if="record.attribute === 'assetType'">
          <span>{{ storeAssetType(record[column.dataIndex]) }}</span>
        </template>
        <template v-else>
          <EditableCell :text="record[column.dataIndex]" @save="handleSave(record, column.dataIndex, $event)" />
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
import EditableCell from "../editable-cell/index.vue" // 该组件用于实现单元格编辑功能
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
let editAssetId
let editAssetType

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

// 保存当前正在编辑的asset的Id
const storeAssetId = (assetId) => {
  editAssetId = assetId
  return editAssetId
}

// 保存当前正在编辑的asset的Type
const storeAssetType = (assetType) => {
  editAssetType = assetType
  return editAssetType
}

// 保存修改后的资产信息
const handleSave = (record, dataIndex, value) => {
  // 1. 更新dataSource中的数据
  const index = dataSource.value.findIndex((item) => item === record)
  if (index > -1) {
    dataSource.value[index][dataIndex] = value
  }
  // 2. 将更新操作发送给后端
  const updateParams = {
    assetId: editAssetId,
    assetType: editAssetType,
    updateData: {
      [record.attribute]: record.value
    }
  }
  updateAsset(updateParams)
}

const updateAsset = async (updateParams) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/common/update/", updateParams)
    window.globalMsg("Finished Update")
  } catch (error) {
    window.globalMsg("Delete Failed")
    console.error("Error uploading file:", error)
  }
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

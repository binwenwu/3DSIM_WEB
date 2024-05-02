<template>
  <mars-dialog icon="table" title="Query Result" width="600" top="85" right="10" :min-width="357">
    <mars-table
      size="small"
      bordered
      :pagination="{ pageSize: 18 }"
      :columns="columns"
      :row-selection="rowSelection"
      :dataSource="assetsList"
      rowKey="assetId"
    >
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.dataIndex === 'info'">
          <mars-icon title="查看详细信息" icon="view-list" @click="viewDetailInfo(record)" />
        </template>
        <template v-else-if="column.dataIndex === 'delete'">
          <mars-icon title="删除该资产" icon="delete-mode" @click="deleteAsset(record)" />
        </template>
        <template v-else>
          <span>{{ text }}</span>
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

interface modelDetailInfo {
  assetId: string
  assetType: string
  feature: string
  product: string
  validTimeSpan: Array<string>
  creationDate: string
  version: string
  boundingVolume: Array<number>
  genericName: string
  filePath: string
}

interface briefInfo {
  assetId: string
  genericName: string
  assetType: string
}

const { activate, disable, isActivate, updateWidget, currentWidget } = useWidget()
const assetsList = ref<briefInfo[]>([])

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
    title: "AssetId",
    dataIndex: "assetId",
    key: "assetId",
    ellipsis: true,
    align: "center",
    defaultSortOrder: "descend",
    sorter: (a, b) => sortByAlphabeticalOrder(a, b, "assetId")
  },
  {
    title: "GenericName",
    dataIndex: "genericName",
    key: "genericName",
    ellipsis: true,
    align: "center",
    defaultSortOrder: "descend",
    sorter: (a, b) => sortByAlphabeticalOrder(a, b, "genericName")
  },
  {
    title: "AssetType",
    dataIndex: "assetType",
    key: "assetType",
    ellipsis: true,
    align: "center",
    defaultSortOrder: "descend",
    sorter: (a, b) => sortByAlphabeticalOrder(a, b, "assetType")
  },
  {
    title: "MoreInfo",
    dataIndex: "info",
    key: "info",
    ellipsis: true,
    align: "center"
  },
  { // 删除表格中当前行的三维资产
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
    ellipsis: true,
    align: "center"
  }
]

// 勾选了表格列表的行
const rowSelection: TableProps["rowSelection"] = {
  onSelect: (selectedRow: any, selectedRows: boolean) => {
    if (selectedRows) {
      (window as any).globalMsg("勾选了行:" + selectedRow.feature)
    } else {
      (window as any).globalMsg("取消了勾选行:" + selectedRow.feature)
    }
  }
}

const viewDetailInfo = (record: modelDetailInfo | sceneDetailInfo) => {
  if (record.assetType === "3DModel") {
    if (!isActivate("model-detail-panel")) {
      activate({
        name: "model-detail-panel",
        data: {
          modelDetail: record
        }
      })
    } else {
      updateWidget("model-detail-panel", {
        data: {
          modelDetail: record
        }
      })
    }
  } else {
    if (!isActivate("scene-detail-panel")) {
      activate({
        name: "scene-detail-panel",
        data: {
          sceneDetail: record
        }
      })
    } else {
      updateWidget("scene-detail-panel", {
        data: {
          sceneDetail: record
        }
      })
    }
  }
}

const deleteAsset = (record: modelDetailInfo | sceneDetailInfo) => {
  // 1. 确认是否删除
  if (!confirm("是否确认删除该资产？")) {
    return
  }
  // 2. 删除表格中的该行
  const index = assetsList.value.findIndex((item) => item === record)
  if (index > -1) {
    assetsList.value.splice(index, 1)
  }
  // 3. 发送请求到后端删除该资产
  
}

const sortByAlphabeticalOrder = (a, b, field: string) => {
  const compareFirstLetter = a[field][0].localeCompare(b[field][0])

  if (compareFirstLetter !== 0) {
    return compareFirstLetter // 如果首字母不同，直接返回首字母的比较结果
  } else {
    // 如果首字母相同，则比较下一位字母
    const nextLetterComparison = compareNextLetter(a[field], b[field], 1)
    return nextLetterComparison
  }
}

const compareNextLetter = (strA, strB, index) => {
  // 边界情况：如果字符串长度不足，直接返回 0
  if (index >= strA.length && index >= strB.length) {
    return 0
  } else if (index >= strA.length) {
    return -1 // strA 较短，排在前面
  } else if (index >= strB.length) {
    return 1 // strB 较短，排在前面
  }

  // 比较当前位的字母
  const compareResult = strA[index].localeCompare(strB[index])
  if (compareResult !== 0) {
    return compareResult // 如果当前位不同，直接返回比较结果
  } else {
    // 如果当前位相同，继续比较下一位字母
    return compareNextLetter(strA, strB, index + 1)
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

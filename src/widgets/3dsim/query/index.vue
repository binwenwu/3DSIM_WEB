<template>
  <mars-dialog icon="find" title="Data Query" width="430" top="85" left="10" :min-width="357">
    <template #icon>
      <mars-icon icon="local" width="18" />
    </template>
    <div class="form-container">
      <a-form>
        <mars-gui ref="marsGuiRef" :options="options" labelCol="5"></mars-gui>
      </a-form>
      <div class="f-pt f-tac">
        <a-space>
          <mars-button @click="query" style="width: 390px">Query - <mars-icon icon="search" /></mars-button>
        </a-space>
      </div>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import axios from "axios"
import type { GuiItem } from "@mars/components/mars-ui/mars-gui"
import { log } from "console"
import { options } from "./map"
import { stringifyQuery } from "vue-router"
import { useWidget } from "@mars/common/store/widget"


const { activate, disable, isActivate, updateWidget } = useWidget()

interface QueryParams {
  feature: string
  product: string
  lat: Array<number>
  lon: Array<number>
  validFrom: Array<number>
  validTo: Array<number>
  viewedRange: Array<number>
  assetType: string
}

const marsGuiRef = ref()
const assets = ref()

const query = async () => {
  window.showLoading()
  window.globalMsg("Starting Query")
  const queryParams = parse2json(marsGuiRef.value.getValues())
  try {
    // 1. Send request to backend to query data with queryParams
    const response = await axios.post("http://127.0.0.1:8000/common/query/", queryParams)
    assets.value = response.data.assets
    // 2. Activate or update query-result widget
    if (!isActivate("query-result")) {
      activate({
        name: "query-result",
        data: {
          assets: assets.value
        }
      })
    } else {
      updateWidget("query-result", {
        data: {
          assets: assets.value
        }
      })
    }
    window.hideLoading()
    window.globalMsg("Finished Query")
  } catch (error) {
    window.globalMsg("Query Failed")
    console.error("Error uploading file:", error)
  }
}

const parse2json = (params: QueryParams) => {
  const queryParams: QueryParams = {
    feature: params.feature,
    product: params.product,
    lat: [...params.lat],
    lon: [...params.lon],
    validFrom: [...params.validFrom],
    validTo: [...params.validTo],
    viewedRange: [...params.viewedRange],
    assetType: params.assetType
  }
  return JSON.stringify(queryParams)
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

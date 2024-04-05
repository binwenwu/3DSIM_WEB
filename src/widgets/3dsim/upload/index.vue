<template>
  <mars-dialog title="Data Import" width="430" top="85" :min-width="357">
    <template #icon>
      <mars-icon icon="local" width="18" />
    </template>
    <div class="position-container">
      <a-form>
        <mars-gui ref="marsGuiRef" :options="options" labelCol="5"></mars-gui>
      </a-form>
      <div style="margin-left: 10px; margin-top: 10px">FileSelect: <mars-input type="file" @change="onFileChange" accept=".zip,.7z" /></div>
      <div class="f-pt f-tac">
        <a-space>
          <mars-button @click="upload" style="width: 390px">Starting Import</mars-button>
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

interface ThreeDSIMForm {
  feature: string
  product: string
  lat: Array<number>
  lon: Array<number>
  validFrom: Array<number>
  validTo: Array<number>
  viewPoint: number
  cityGMLFileType: string
  _3DTilesFileType: string
  osgFileType: string
  i3sFileType: string
  reliefFileType: string
  pointCloudFileType: string
  physicalFieldFileType: string
  _3DMeshFileType: string
}

interface Dimension {
  feature: string
  product: string
  lat: Array<number>
  lon: Array<number>
  validFrom: Array<number>
  validTo: Array<number>
  viewPoint: number
  mimeType: string
}

const marsGuiRef = ref()
const formData = new FormData()

const onFileChange = async (e: Event) => {
  // 获取文件信息
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]

  // 创建一个 Promise 包装的函数
  const appendFileToFormData = () => {
    return new Promise<void>((resolve, reject) => {
      if (file) {
        formData.append("file", file)
        resolve() // 成功时执行 resolve
      } else {
        reject(new Error("No file selected")) // 失败时执行 reject
      }
    })
  }

  try {
    // 等待将文件信息添加到 formData 中的操作完成
    await appendFileToFormData()

    // 当 formData.append() 执行完毕后，才会继续执行下面的操作
    console.log("File appended to formData successfully")

    // 在这里可以继续进行后续的操作
  } catch (error) {
    console.error("Error:", error)
  }
}

// 数据入库
const upload = async () => {
  if (formData.get("file") === null) {
    window.globalMsg("Please select a file")
  } else {
    window.showLoading()
    window.globalMsg("Starting Import")
    // 获取维度信息
    const dimension = parse2json(marsGuiRef.value.getValues())
    // 将维度信息添加到formData中
    formData.append("dimension", dimension)
    try {
      // 向upload页面上传
      const response = await axios.post("http://127.0.0.1:8000/common/upload/", formData)
      window.hideLoading()
      window.globalMsg("Finished Import")
    } catch (error) {
      window.globalMsg("Import Failed")
      console.error("Error uploading file:", error)
    }
  }
}

// 将数据转换为json格式
const parse2json = (form: ThreeDSIMForm) => {
  const dimension: Dimension = {
    feature: form.feature,
    product: form.product,
    lat: [...form.lat],
    lon: [...form.lon],
    validFrom: [...form.validFrom],
    validTo: [...form.validTo],
    viewPoint: form.viewPoint,
    mimeType: ""
  }
  switch (form.product) {
    case "CityGML":
      dimension.mimeType = form.cityGMLFileType
      break
    case "3DTiles":
      dimension.mimeType = form.cityGMLFileType
      break
    case "OSG":
      dimension.mimeType = form.osgFileType
      break
    case "I3S":
      dimension.mimeType = form.i3sFileType
      break
    case "RasterRelief":
      dimension.mimeType = form.reliefFileType
      break
    case "PointCloud":
      dimension.mimeType = form.pointCloudFileType
      break
    case "PhysicalField":
      dimension.mimeType = form.physicalFieldFileType
      break
    case "3DMesh":
      dimension.mimeType = form._3DMeshFileType
      break
    default:
      dimension.mimeType = form.cityGMLFileType
  }
  return JSON.stringify(dimension)
}
</script>
<style lang="less" scoped>
.position-container {
  padding-top: 10px;
  margin-right: 5px;
}
:deep(.mars-input) {
  max-width: 310px;
}
</style>

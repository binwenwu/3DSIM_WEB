<template>
  <mars-dialog icon="inbox-out" title="Format Convert" width="430" top="85" :min-width="357">
    <template #icon>
      <mars-icon icon="local" width="18" />
    </template>
    <div class="form-container">
      <a-form>
        <mars-gui ref="marsGuiRef" :options="options" labelCol="5"></mars-gui>
      </a-form>
      <div style="margin-left: 10px; margin-top: 10px">FileSelect: <mars-input type="file" @change="onFileChange" accept=".zip,.7z" /></div>
      <div class="f-pt f-tac">
        <a-space>
          <mars-button @click="convert" style="width: 390px">Convert - <mars-icon icon="exchange-four" /></mars-button>
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

interface ImportForm {
  feature: string
  product: string
  lat: Array<number>
  lon: Array<number>
  validFrom: Array<number>
  validTo: Array<number>
  viewedRange: Array<number>
  cityGMLFileType: string
  _3DTilesFileType: string
  osgFileType: string
  i3sFileType: string
  reliefFileType: string
  pointCloudFileType: string
  physicalFieldFileType: string
  _3DMeshFileType: string
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
const convert = async () => {
  if (formData.get("file") === null) {
    window.globalMsg("Please select a file")
  } else {
    window.showLoading()
    window.globalMsg("Starting Convert")
    // 获取维度信息
    const convertType = JSON.stringify(marsGuiRef.value.getValues())
    formData.append("convertType", convertType)
    try {
      const response = await axios.post("http://127.0.0.1:8000/common/convert/", formData, {
        responseType: "blob" // 重要：确保响应类型设置为blob
      })

      // 创建一个blob对象的链接
      const url = window.URL.createObjectURL(new Blob([response.data]))
      // 创建一个链接元素
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "convert_result.zip") // 或者其他你想指定的文件名
      // 模拟点击链接以触发下载
      document.body.appendChild(link)
      link.click()
      // 移除链接元素
      document.body.removeChild(link)
      // 释放创建的URL对象
      window.URL.revokeObjectURL(url)
      window.hideLoading()
      window.globalMsg("Finished Convert")
    } catch (error) {
      window.globalMsg("Convert Failed")
      console.error("Error uploading file:", error)
    }
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

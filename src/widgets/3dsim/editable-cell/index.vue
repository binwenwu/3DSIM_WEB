<template>
  <div>
    <input v-if="editing" v-model="internalText" @blur="save" @keyup.enter="save" />
    <span v-else @dblclick="toggleEdit">{{ internalText }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  text: String
})

const emit = defineEmits(["save"])

const editing = ref(false)
const internalText = ref(props.text)
const originalText = ref(props.text) // 保存原始文本用于可能的取消操作

const toggleEdit = () => {
  editing.value = !editing.value
}

const save = () => {
  // 显示确认对话框
  if (confirm("是否确认修改？")) {
    emit("save", internalText.value)
    originalText.value = internalText.value
    editing.value = false
  } else {
    // 用户选择了取消，恢复原始文本
    internalText.value = originalText.value
    editing.value = false
  }
}


</script>
<script lang="ts">
export default {
  name: "editable-cell"
}
</script>

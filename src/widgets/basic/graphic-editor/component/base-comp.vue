<template>
  <span v-if="props.type === 'label'" class="attr-editor-label">{{ attrs.value || "" }}</span>
  <component v-else :is="getComponent(props.type as keyof typeof components)" size="small" v-bind="attrs"> </component>
</template>
<script setup lang="ts">
import { useAttrs } from "vue"
const props = withDefaults(
  defineProps<{
    type: string
  }>(),
  {
    type: "label"
  }
)
const attrs = useAttrs()

const components = {
  number: "mars-input-number",
  radio: "mars-switch",
  slider: "mars-slider",
  color: "mars-color-picker",
  combobox: "mars-select",
  textarea: "mars-textarea",
  label: "span"
}
function getComponent(type: keyof typeof components) {
  return components[type]
}
</script>

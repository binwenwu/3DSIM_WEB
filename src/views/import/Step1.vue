<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register">
        <template #fac="{ model, field }">
        </template>
      </BasicForm>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BasicForm, useForm } from '@/components/Form';
import { step1Schemas } from './data';

import { Select, Input, Divider } from 'ant-design-vue';

const emit = defineEmits(['next']);

const [register, { validate }] = useForm({
  labelWidth: 100,
  schemas: step1Schemas,
  actionColOptions: {
    span: 14,
  },
  showResetButton: false,
  submitButtonOptions: {
    text: '下一步',
  },
  submitFunc: customSubmitFunc,
});

async function customSubmitFunc() {
  try {
    const values = await validate();
    emit('next', values);
  } catch (error) {
    console.error(error);
  }
}
</script>
<style lang="less" scoped>
.step1 {
  &-form {
    width: 450px;
    margin: 0 auto;
  }

  h3 {
    margin: 0 0 12px;
    color: @text-color-base;
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: @text-color-base;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    color: @text-color-base;
  }
}
</style>

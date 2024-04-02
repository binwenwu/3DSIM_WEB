<template>
  <div class="w-120 m-auto">
    <Alert message="确认数据维度后，后续将以此维度进行检索" show-icon />
    <Descriptions :column="1" class="mt-5">
      <Descriptions.Item label="Feature"> {{ props.step2Values.feature }} </Descriptions.Item>
      <Descriptions.Item label="Product"> {{ props.step2Values.product }} </Descriptions.Item>
      <Descriptions.Item label="Viewpoint"> {{ props.step2Values.viewpoint }} </Descriptions.Item>
      <Descriptions.Item label="Spatial"> {{ props.step2Values.spatial }} </Descriptions.Item>
      <Descriptions.Item label="Time"> {{ props.step2Values.time }} </Descriptions.Item>
      <Descriptions.Item>
        <BasicUpload :maxSize="10240" :maxNumber="1" @change="handleChange" :api="uploadApi"/>
      </Descriptions.Item>

    </Descriptions>
    <BasicForm @register="register" />
  </div>

</template>
<script lang="ts" setup>
import { BasicForm, useForm } from '@/components/Form';
import { BasicUpload } from '@/components/Upload';
import { Alert, Divider, Descriptions } from 'ant-design-vue';
import { defineProps, ref } from 'vue';
import { useMessage } from '@/hooks/web/useMessage';
import { uploadApi } from '@/api/sys/upload';


// 获取父组件传递的值
const props = defineProps<{
  step2Values: any;
}>()

const { createMessage } = useMessage();
const file = ref<File | null>(null);
const emit = defineEmits(['next', 'prev']);


const [register, { validate, setProps }] = useForm({
  labelWidth: 80,
  actionColOptions: {
    span: 16,
  },
  resetButtonOptions: {
    text: '返回',
  },
  submitButtonOptions: {
    text: '入库',
  },
  resetFunc: customResetFunc,
  submitFunc: customSubmitFunc,
});

async function customResetFunc() {
  emit('prev');
}

async function customSubmitFunc() {
  try {
    const values = await validate();
    setProps({
      submitButtonOptions: {
        loading: true,
      },
    });
    setTimeout(() => {
      setProps({
        submitButtonOptions: {
          loading: false,
        },
      });
      emit('next', values);
    }, 1500);
  } catch (error) {
    console.error(error);
  }
}


function handleChange(list: string[]) {
    createMessage.info(`已上传文件${JSON.stringify(list)}`);
  }

</script>

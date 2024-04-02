<template>
  <PageWrapper
    title="数据入库"
    contentBackground
    contentClass="p-4"
  >
    <div clss="step-form-form">
      <Steps :current="current">
        <Steps.Step title="填写数据维度信息" />
        <Steps.Step title="确认信息并上传数据" />
        <Steps.Step title="操作完成" />
      </Steps>
    </div>
    <div class="mt-5">
      <Step1 @next="handleStep1Next" v-show="current === 0" />
      <Step2
        @prev="handleStepPrev"
        @next="handleStep2Next"
        v-show="current === 1"
        :step2Values = "state.step2Values"
        v-if="state.initStep2"
      />
      <Step3 v-show="current === 2" @redo="handleRedo" v-if="state.initStep3" />
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';
  import Step3 from './Step3.vue';
  import { PageWrapper } from '@/components/Page';
  import { Steps } from 'ant-design-vue';

  defineOptions({ name: 'FormStepPage' });

  const current = ref(0);

  const state = reactive({
    initStep2: false,
    initStep3: false,
    step2Values: null,
  });

  function handleStep1Next(step1Values: any) {
    current.value++;
    state.initStep2 = true;
    state.step2Values = step1Values;
    console.log(step1Values);
  }

  function handleStepPrev() {
    current.value--;
  }

  function handleStep2Next(step2Values: any) {
    current.value++;
    state.initStep3 = true;
    console.log(step2Values);
  }

  function handleRedo() {
    current.value = 0;
    state.initStep2 = false;
    state.initStep3 = false;
  }
</script>
<style lang="less" scoped>
  .step-form-content {
    padding: 24px;
    background-color: @component-background;
  }

  .step-form-form {
    width: 750px;
    margin: 0 auto;
  }
</style>

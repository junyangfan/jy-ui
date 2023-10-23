<script lang="ts">
export default {
  // 全局主题配置组件
  name: 'JThemeConfig',
};
</script>
<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { defaultThemeConfig } from '@/index';
</script>

<template>
  <ConfigProvider :theme="defaultThemeConfig">
    <slot></slot>
  </ConfigProvider>
</template>

<style lang="less" scoped></style>

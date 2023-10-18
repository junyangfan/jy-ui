<script lang="ts">
export default {
  name: 'JExampleComponent',
};
</script>
<script setup lang="ts">
import { Button, ConfigProvider } from 'ant-design-vue';
import { usePrefixCls } from '@/utils/useTools';
import defaultThemeConfig from '@/themeConfig';

defineProps({
  // 主题配置（https://next.antdv.com/docs/vue/customize-theme-cn）
  theme: {
    type: Object,
    required: false,
    default: defaultThemeConfig,
  },
});
</script>

<template>
  <ConfigProvider :theme="theme" :prefix-cls="usePrefixCls('example')">
    <Button class="example-component">JExampleComponent</Button>
  </ConfigProvider>
</template>

<style lang="less" scoped>
@import '@/style.less';
.example-component {
  color: @themeColor;
}
</style>

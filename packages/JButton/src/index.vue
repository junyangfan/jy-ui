<script lang="ts">
export default {
  name: 'JButton',
};
</script>
<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { usePrefixCls } from '@/utils/useTools';
</script>

<template>
  <div>xxx</div>
  <JThemeConfig>
    <Button type="primary" :prefix-cls="usePrefixCls('btn')">测试组件</Button>
  </JThemeConfig>
</template>

<style lang="less" scoped>
@import '@/style.less';
.test {
  color: @themeColor;
}
</style>

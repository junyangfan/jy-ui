<script lang="ts">
export default {
  name: 'JExampleComponent',
};
</script>
<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { usePrefixCls } from '@/utils/useTools';
</script>

<template>
  <JThemeConfig>
    <Button class="example-component" :prefix-cls="usePrefixCls('example')">
      JExampleComponent
    </Button>
  </JThemeConfig>
</template>

<style lang="less" scoped>
@import '@/style.less';
.example-component {
  color: @themeColor;
}
</style>

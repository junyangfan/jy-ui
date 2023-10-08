<script lang="ts">
export default {
  name: 'JButton',
};
</script>
<script setup lang="ts">
import { Button } from 'ant-design-vue';
import Logo from '../assets/logo.png';
// import { usePrefixCls } from '../../utils/useTools'
import { usePrefixCls } from '@/utils/useTools';
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <div class="test">测试组件-测试</div>
  <img :src="Logo" alt="" />
  <Button type="primary" :prefix-cls="usePrefixCls('btn')">
    Primary Button
  </Button>
</template>

<style lang="less" scoped>
@import '@/style.less';
.test {
  color: @themeColor;
}
</style>

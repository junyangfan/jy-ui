<script lang="ts">
export default {
  name: 'JButton',
};
</script>
<script setup lang="ts">
import { Button } from 'ant-design-vue';
import Logo from '../assets/logo.png';
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
  <Button type="primary">Primary Button</Button>
</template>

<style lang="less" scoped>
.test {
  color: red;
}
</style>

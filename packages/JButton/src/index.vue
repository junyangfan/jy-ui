<script lang="ts">
export default {
  name: 'JButton',
};
</script>
<script setup lang="ts">
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
  <a-button type="primary">Primary Button</a-button>
</template>

<style lang="less" scoped>
.test {
  color: red;
}
</style>

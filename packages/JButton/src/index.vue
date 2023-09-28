<script lang="ts">
export default {
  name: 'JButton',
};
</script>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <div class="test">测试组件-测试</div>
</template>

<style lang="less" scoped>
.test {
  color: red;
}
</style>

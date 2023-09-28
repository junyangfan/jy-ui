<script lang="ts">
export default {
  name: 'JInput',
};
</script>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'xx',
  },
});
</script>

<template>
  <div class="test">测试组件-Input</div>
</template>

<style lang="less" scoped>
@import url('../../style.less');
.test {
  color: @themeColor;
  user-select: none;
}
</style>

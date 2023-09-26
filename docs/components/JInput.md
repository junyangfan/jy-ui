# 输入框组件

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>

<div>
  <a-input v-model:value="value" placeholder="Basic usage" />
</div>


---
title: 快速开始
---

# 快速开始

## 安装
```bash
npm install @junyang/jy-ui --save-dev
或
yarn add @junyang/jy-ui --save-dev
或
pnpm install @junyang/jy-ui --save-dev
```

## 使用

### 全局注册
```ts
// main.ts
// 引入组件
import JyUI from '@junyang/jy-ui'
// 引入样式
import '@junyang/jy-ui/lib/style.css'

// 使用组件
createApp(App).use(JyUI).mount('#app')
```

### 局部注册

```vue
<script lang="ts">
export default {
  name: 'Demo',
};
</script>
<script setup lang="ts">
import { JButton } from '@junyang/jy-ui'
</script>

<template>
  <j-button>按钮</j-button>
</template>

<style lang="less" scoped></style>
```





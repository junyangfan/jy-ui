import DefaultTheme from 'vitepress/theme'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as AntdIcons from '@ant-design/icons-vue';
import JyUi from '../../../packages'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx),
    // 注册ElementPlus
    ctx.app.use(Antd)
    // 注册所有图标
    for (const [key, component] of Object.entries(AntdIcons)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(JyUi)
  }
}
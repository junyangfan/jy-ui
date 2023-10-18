import DefaultTheme from 'vitepress/theme'
import * as AntdIcons from '@ant-design/icons-vue';
import JyUi from '../../../packages'
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
	...theme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // 注册所有图标
    for (const [key, component] of Object.entries(AntdIcons)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(JyUi)
		// 注册demo预览组件
		ctx.app.component('demo-preview', AntDesignContainer)
  }
}

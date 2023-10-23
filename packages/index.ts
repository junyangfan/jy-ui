// 全局注册组件
import type { App, Component } from 'vue';
import 'ant-design-vue/dist/reset.css';
import * as utils from './utils';
import JThemeConfig from './JThemeConfig';
import JExampleComponent from './JExampleComponent';
import JButton from './JButton';
import JInput from './JInput';

// 存储主题配置信息
const defaultThemeConfig = {
    token: {
      colorPrimary: '#00b96b',
    },
  },
  // 存储组件列表
  components = [JThemeConfig, JExampleComponent, JButton, JInput],
  // 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
  installComponents = (app: App) => {
    components.forEach((comp: Component) => {
      app.component(comp.name as string, comp);
    });
  },
  install = (app: App, themeOpts = {}) => {
    installComponents(app);
    Object.assign(defaultThemeConfig, themeOpts);
  };
// 按需引入

export { utils, defaultThemeConfig, JButton, JInput };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};

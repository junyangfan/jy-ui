// 全局注册组件
import { App, Component } from 'vue';
import JButton from './Button';
import JInput from './Input';
// 存储组件列表
const components = [JButton, JInput],
  // 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
  installComponents = (app: App) => {
    components.forEach((comp: Component) => {
      app.component(comp.name as string, comp);
    });
  },
  install = (app: App) => {
    installComponents(app);
  };
// 按需引入

export { JButton, JInput };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};

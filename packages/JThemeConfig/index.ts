import { App } from 'vue';
import JConfigProvider from './src/index.vue';

JConfigProvider.install = function (app: App) {
  app.component(JConfigProvider.name, JConfigProvider);
};

export default JConfigProvider;

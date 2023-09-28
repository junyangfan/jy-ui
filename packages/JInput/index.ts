import { App } from 'vue';
import JInput from './src/index.vue';

JInput.install = function (app: App) {
  app.component(JInput.name, JInput);
};

export default JInput;

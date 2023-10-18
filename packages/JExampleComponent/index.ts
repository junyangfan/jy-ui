import { App } from 'vue';
import JExampleComponent from './src/index.vue';

JExampleComponent.install = function (app: App) {
  app.component(JExampleComponent.name, JExampleComponent);
};

export default JExampleComponent;

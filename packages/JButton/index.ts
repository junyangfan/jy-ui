import { App } from 'vue';
import JButton from './src/index.vue';

JButton.install = function (app: App) {
  app.component(JButton.name, JButton);
};

export default JButton;

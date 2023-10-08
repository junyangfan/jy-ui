import JButton from './JButton/src/index.vue';
import JInput from './JInput/src/index.vue';

declare module 'vue' {
  export interface GlobalComponents {
    JButton: typeof JButton;
    JInput: typeof JInput;
  }
}

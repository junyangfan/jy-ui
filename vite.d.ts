/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from './vite';
  const component: DefineComponent<{}, {}, any>;

  export default component;
}

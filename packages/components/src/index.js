import { defineAsyncComponent } from 'vue';

export const HelloWorld = defineAsyncComponent(() => import('./hello-world'));

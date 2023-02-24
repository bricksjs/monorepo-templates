import { createApp } from 'vue';
import './style.css';

import App from './app';
import router from './router';

// import './demo';

createApp(App)
  .use(router)
  .mount('#app');

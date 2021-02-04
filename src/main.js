import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import AppLayout from '@/layouts/AppLayout'

createApp(App)
  .use(router)
  .component('AppLayout', AppLayout)
  .mount('#app')

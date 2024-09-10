import { createSSRApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

createSSRApp(App)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global theme (CSS variables + base utilities)
import './styles/theme.css'

createApp(App)
  .use(router)
  .mount('#app')
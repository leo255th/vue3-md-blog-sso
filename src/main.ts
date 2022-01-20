import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/api.interceptors'  // 导入axios http请求守卫
import './router/router.interceptor' // 导入路由守卫
createApp(App).use(store).use(router).mount('#app')

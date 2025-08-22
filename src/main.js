import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 樣式
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import App from './App.vue'
import router from './router' // 引入路由配置
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router) // 使用路由

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app') 

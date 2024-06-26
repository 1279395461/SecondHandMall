import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import pinia from './stores';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import mitt from 'mitt'
// import naive from 'naive-ui'
const app=createApp(App)
app.config.globalProperties.Bus = mitt()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router).use(pinia).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')

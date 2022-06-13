import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './index.css'
import Router from './router'
import Store from './store'
import './permission'

const app = createApp(App)

app.use(Router).use(Store).use(ElementPlus).mount('#app')

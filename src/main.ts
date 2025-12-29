import svgIcon from '@/components/SvgIcon/index.vue'
import i18n from '@/locales/i18n'
import * as THREE from 'three'
import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import './style.css'
import './style/markdown.css'
import './style/style.scss'
// 全局svg组件
import 'virtual:svg-icons-register'
// svg全局组件// 路由
import router from '@/router'
// pinia
import { createPinia } from 'pinia'
// pinia持久化
import piniaPluginPersist from 'pinia-plugin-persist'
// localStorage监听插件
import { localStorageListener } from './plugins/localStorageListener'
// localStorage重写插件，解决同一标签页内storage事件不触发的问题
import { initLocalStorageOverride } from './plugins/localStorageOverride'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)

app.config.globalProperties.$THREE = THREE // 挂载到原型
app.component('svg-icon', svgIcon)
app.use(router).use(VueDOMPurifyHTML).use(pinia).use(i18n)

// 挂载应用后初始化localStorage相关插件
app.mount('#app')
initLocalStorageOverride() // 重写localStorage方法，确保同一标签页内也能触发storage事件
localStorageListener() // 监听localStorage变化

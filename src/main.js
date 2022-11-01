import { createApp } from 'vue'
import App from './App.vue'

import VKindEditor from './index'


createApp(App)
.use(VKindEditor, { name: 'VEditor' })
.mount('#app')

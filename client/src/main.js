import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App.vue'
import router from './router'
import ModalBase from './components/base/ModalBase.vue'
import UploadImageBase from './components/base/UploadImageBase.vue'

const app = createApp(App)

app.component('modal-base', ModalBase)
app.component('upload-image-base', UploadImageBase)

app.use(createPinia())
app.use(router)

app.mount('#app')

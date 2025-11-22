import { createApp } from 'vue'
import { createHead } from '@vueuse/head';
import App from '@/App.vue'
import '@/style.css'
import router from '@/router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(BootstrapVue3)
app.mount('#app')

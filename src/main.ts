import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App);
app.use(router)
app.mount('#app')

// fix : _plugin-vue_export-helper.cdc0426e.js 404 not found , don't know reason.
import BBL from './BBL.vue'
const bbl = createApp(BBL);
bbl.mount('#bbl')

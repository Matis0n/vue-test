import './assets/main.css'
import store from './store/store.js'
import { createApp } from 'vue'
import App from './App.vue'
//q2
createApp(App).use(store).mount('#app')

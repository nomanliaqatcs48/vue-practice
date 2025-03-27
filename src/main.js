import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import Toast, { POSITION } from 'vue-toastification';

import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Toast, {
    position: POSITION.TOP_RIGHT,  // ✅ Set toast position
    timeout: 3000,  // ⏳ Auto close after 3 sec
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
  });
app.mount('#app');

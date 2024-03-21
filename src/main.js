import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import './assets/css/main.css';

const app = createApp(App);
const i18n = createI18n({});

app.use(createPinia()).use(router).use(i18n).mount('#app');

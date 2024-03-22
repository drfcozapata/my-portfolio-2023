import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from '@/router';
import './assets/css/main.css';
import dictionary from '@/locale/dictionary.js';

const app = createApp(App);
const i18n = createI18n({
	messages: dictionary,
	fallbackLocale: 'en',
	locale: navigator.language.startsWith('es') ? 'es' : 'en',
});

if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

app.use(createPinia()).use(router).use(i18n).mount('#app');

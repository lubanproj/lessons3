import { createApp } from 'vue';
import App from './App.vue';
import element from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueMarkdownIt from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(element);
app.use(router);
app.use(VueMarkdownIt);
app.use(store);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
// import responsive from 'vue-responsive'

// Vue.use(responsive)

createApp(App).use(router).mount('#app');

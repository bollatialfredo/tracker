import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes/router'
import { createPinia } from 'pinia'
import useIcons from './utils/iconify'
import { animateElementClick } from './utils/animatios'
import { apiInterceptor } from './api/interceptor'

const pinia = createPinia();
useIcons();
const app = createApp(App)
app.use(router).use(pinia)
app.directive('wave-animation', {
  beforeMount(el: HTMLElement) {
    const div = document.createElement('div');
    div.classList.add('animated-button', 'select-none');
    div.onclick = animateElementClick;
    el.insertBefore(div, el.firstChild);
  }
})
apiInterceptor();
app.mount('#app');

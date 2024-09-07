import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './index.css'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons'; // İstediğiniz ikonları ekleyin
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faUser, faCog);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')

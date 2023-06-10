import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */);

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

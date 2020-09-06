import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toast from './js/toast'

Vue.use(Toast);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

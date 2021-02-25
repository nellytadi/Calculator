import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/style.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

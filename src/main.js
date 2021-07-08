import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; // router实例
import store from './store/index'; // store实例

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

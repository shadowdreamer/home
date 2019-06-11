import Vue from 'vue'
import router from './router'
import '@/utils/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

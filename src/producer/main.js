import Vue from 'vue'
import Producer from './Producer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Producer),
}).$mount('#producer')

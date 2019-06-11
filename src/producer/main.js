import Vue from 'vue'
import App from './App.vue'
import { Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.prototype.$notify = Notification;

new Vue({
  render: h => h(App),
}).$mount('#app')

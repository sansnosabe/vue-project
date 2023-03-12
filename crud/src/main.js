import Vue from 'vue'
import VueAlertify from 'vue-alertify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueAlertify);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

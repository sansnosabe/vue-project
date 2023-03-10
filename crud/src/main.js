import Vue from 'vue'
import VueAlertify from 'vue-alertify';

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
 

Vue.config.productionTip = false
Vue.use(VueAlertify);

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

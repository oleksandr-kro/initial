import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";


import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue";

export const eventBus= new Vue();

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);



new Vue({
  render: h => h(App),
}).$mount('#app')

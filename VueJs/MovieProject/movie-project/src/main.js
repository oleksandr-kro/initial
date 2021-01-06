import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "@/routes";
import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const router= new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

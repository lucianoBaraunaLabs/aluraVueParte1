import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history' // o vue aqui lima o #. No backend ainda é preciso que seja
  // tratada a url para tirar esse carinha.

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

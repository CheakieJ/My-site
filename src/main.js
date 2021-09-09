import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import "./mock";
import "./eventBus";

import { showMessage } from "./utils/index.js";
Vue.prototype.$showMessage = showMessage;

import vlazy from "./directives/lazy.js";
console.log(vlazy);
Vue.directive("lazy", vlazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import "./mock";
import "./eventBus";
import store from "./store";
import { showMessage } from "./utils/index.js";
import vlazy from "./directives/lazy.js";
store.dispatch("setting/fetchSetting");

Vue.prototype.$showMessage = showMessage;
Vue.directive("lazy", vlazy);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

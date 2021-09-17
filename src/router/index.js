import Vue from "vue";
import vueRouter from "vue-router";
import routes from "./routes";
Vue.use(vueRouter);
const router = new vueRouter({
  routes,
  mode: "history",
});
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});
export default router;

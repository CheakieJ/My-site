<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left-side">
          <Site />
        </div>
      </template>
      <template>
        <div class="main">
          <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "./components/Layout";
import Site from "./components/SiteAside";
export default {
  components: {
    Layout,
    Site,
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
#app {
  .self-fill(fixed);

  .left-side {
    width: 250px;
    height: 100%;
  }
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>

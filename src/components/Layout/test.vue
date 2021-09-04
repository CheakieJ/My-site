<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          left
        </div>
      </template>

      <div class="main">
        entergdfgfgfdgfdssgfdgsgdf
      </div>

      <template #right>
        <div class="right">
          right
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
// import Site from "../SiteAside";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 800px;
  height: 1000px;
  border: 2px solid #f40;
  .left {
    width: 200px;
    height: 100%;
    background-color: turquoise;
  }
  .main {
    background-color: tomato;
    width: 100%;
    height: 100%;
  }
  .right {
    background-color: yellow;
    width: 150px;
    height: 100%;
  }
}
</style>

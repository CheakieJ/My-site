<template>
  <div id="app">
    <Menu userName="jj" />
  </div>
</template>
<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 200px;
  height: 500px;
  background-color: #000;
}
</style>

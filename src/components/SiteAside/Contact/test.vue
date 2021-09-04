<template>
  <div id="app">
    <Contact
      userName="cheakie"
      :QQ="1515421662"
      email="cheakie@163.com"
      weChat="CheakieJ"
    />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 250px;
  height: 500px;
  padding: 100px 0;
  background-color: #000;
}
</style>

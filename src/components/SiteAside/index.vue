<template>
  <div class="site-container">
    <Avatar
      src="https://img2.baidu.com/it/u=3366578486,423528972&fm=26&fmt=auto&gp=0.jpg"
    />
    <h1 class="title">扫地僧🧹</h1>
    <Menu />
    <Contact />
    <p class="com">京ICP备12138号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  props: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-container {
  background-color: @dark;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  .com {
    padding: 30px 20px;
    font-size: 14px;
    color: @words;
    text-align: center;
  }
  .avatar-container {
    margin: 0 auto;
    padding: 20px;
  }
  .title {
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
}
</style>

<template>
  <div class="site-container">
    <Avatar :src="data.avatar" />
    <h1 class="title">{{ data.siteTitle || "马云" }}</h1>
    <Menu />
    <Contact
      :userName="data.githubName"
      :email="data.mail"
      :QQ="data.qq"
      :weChat="data.weixin"
    />
    <p class="com">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
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

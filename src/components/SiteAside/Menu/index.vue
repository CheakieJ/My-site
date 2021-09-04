<template>
  <div class="menu-container">
    <routerLink
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
      active-class="bg"
      exact-active-class=""
    >
      <div class="icon"><Icon :type="item.icon" /></div>
      <div class="con">{{ item.title }}</div>
    </routerLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    userName: {
      type: String,
    },
  },
  data() {
    return {
      items: [
        { link: "/", title: "首页", icon: "home", exact: true },
        { link: "/blog", title: "文章", icon: "blog", exact: false },
        { link: "/about", title: "关于", icon: "about", exact: true },
        { link: "/project", title: "项目", icon: "code", exact: true },
        { link: "/message", title: "留言", icon: "chat", exact: true },
      ],
    };
  },
  // methods: {
  //   selectBg(item) {
  //     const path = item.link;
  //     const currentPath = location.pathname;
  //     if (item.isPath) {
  //       return currentPath.startsWith(path);
  //     } else {
  //       return path == currentPath;
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  padding: 30px 3px;
  background-color: transparent;
  a {
    padding: 3px 30px;
    display: block;
    display: flex;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    .icon {
      width: 30px;
      height: 20px;
    }
    &.bg {
      background-color: darken(@words, 3%);
    }
  }
}
</style>

<template>
  <div class="blogcontent-container">
    <h1>{{ dataContent.title }}</h1>
    <aside>
      <span>日期：{{ formatTime(dataContent.createDate) }}</span>
      <span>浏览：{{ dataContent.scanNumber }}</span>
      <a href="#dataform-contianer">评论：{{ dataContent.commentNumber }}</a>
      <a href="">{{ dataContent.category.name }}</a>
    </aside>
    <div v-html="dataContent.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatTime } from "@/utils";
export default {
  props: {
    dataContent: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatTime,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/markdown.css";
.blogcontent-container {
  margin-bottom: 30px;
  aside {
    color: @gray;
    font-size: 12px;
    margin: 20px 0;
    span,
    a {
      margin-left: 1em;
    }
  }
}
</style>

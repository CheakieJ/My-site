<template>
  <Layout>
    <template #default>
      <div class="main-container" ref="container">
        <BlogContent :dataContent="data" v-if="data" />
        <BlogComment v-if="!loadingShow" />
        <Loader v-if="loadingShow" />
      </div>
    </template>
    <template #right>
      <BlogTOC :toc="data.toc" v-if="data" />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogContent from "./components/BlogContent.vue";
import BlogTOC from "./components/BlogTOC.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/blog.js";
import BlogComment from "./components/BlogComment.vue";
import Loader from "@/components/Loader";
export default {
  components: {
    Layout,
    BlogContent,
    BlogTOC,
    BlogComment,
    Loader,
  },
  mixins: [fetchData()],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    scrolled() {
      this.$bus.$emit("mainContainer", this.$refs.container);
    },
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.scrolled);
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener("scroll", this.scrolled);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>

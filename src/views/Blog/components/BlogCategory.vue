<template>
  <div class="category-container">
    <h2>文章分类</h2>
    <RightList :list="list" @selected="handleSelect" />
    <Loader v-if="loadingShow" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from "@/api/blog.js";
import Loader from "@/components/Loader";
export default {
  components: {
    RightList,
    Loader,
  },
  mixins: [fetchData([])],
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  computed: {
    cateGoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticle = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { name: "全部", id: -1, articleCount: totalArticle },
        ...this.data,
      ];

      return result.map((it) => ({
        ...it,
        active: it.id === this.cateGoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
};
</script>

<style lang="less" scoped>
.category-container {
  position: relative;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  h2 {
    margin: 0;
    font-size: 15px;
  }
}
</style>

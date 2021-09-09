<template>
  <div class="comment-container">
    <MessageArea
      title="评论详情"
      :subTitle="data.total"
      :list="data.rows"
      @submit="handleSubmit"
    />
    <p class="loading" v-if="loadingShow">加载中...</p>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";

export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      pages: 1,
      limit: 10,
    };
  },
  mixins: [fetchData({})],
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.pages, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback();
    },
    async fetchMore() {
      if (this.hasMore) {
        return;
      }
      this.loadingShow = true;
      this.pages++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.loadingShow = false;
    },
    handleScroll(dom) {
      if (this.loadingShow) {
        return;
      }
      if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight) {
        this.fetchMore();
      }
    },
  },
  computed: {
    hasMore() {
      return this.data.rows.length >= this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainContainer", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.comment-container {
  .loading {
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #999;
  }
}
</style>

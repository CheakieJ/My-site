<template>
  <MessageArea
    title="评论详情"
    :subTitle="data.total"
    :list="data.rows"
    @submit="handleSubmit"
  />
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
  },
};
</script>

<style></style>

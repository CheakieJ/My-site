<template>
  <div id="app">
    <Pager :total="222" :current="current" @pageChange="handlePageChange" />
  </div>
</template>
<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
<style scoped></style>

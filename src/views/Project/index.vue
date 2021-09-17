<template>
  <div class="project-container">
    <iframe
      :src="data"
      frameborder="0"
      class="project-content"
      @load="isLoading = true"
    ></iframe>
    <Loader v-if="!isLoading || loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/Loader";
export default {
  computed: mapState("project", ["data", "loading"]),
  mounted() {
    this.$store.dispatch("project/fetchProject");
  },
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="less" scoped>
.project-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .project-content {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>

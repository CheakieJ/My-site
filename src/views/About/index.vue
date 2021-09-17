<template>
  <div class="about-container">
    <iframe
      :src="data"
      frameborder="0"
      class="about-content"
      @load="isLoading = true"
    ></iframe>
    <Loader v-if="!isLoading || loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/Loader";
export default {
  computed: mapState("about", ["data", "loading"]),
  mounted() {
    this.$store.dispatch("about/fetchAbout");
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
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .about-content {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>

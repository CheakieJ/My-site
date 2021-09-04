<template>
  <div class="img-loader-container">
    <img v-if="!everyFinish" class="first" :src="placeholder" alt="" />
    <img
      @load="load"
      class="second"
      :src="src"
      alt=""
      :style="{ opacity: secOpac, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      finishLoad: false,
      everyFinish: false,
    };
  },
  computed: {
    secOpac() {
      return this.finishLoad ? 1 : 0;
    },
  },
  methods: {
    load() {
      this.finishLoad = true;
      setTimeout(() => {
        this.everyFinish = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
.img-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .first {
    filter: blur(10px);
  }
}
</style>

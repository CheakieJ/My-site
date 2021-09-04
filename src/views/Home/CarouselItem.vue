<template>
  <div
    class="carouseItem-contianer"
    ref="container"
    @mousemove="handleMove"
    @mouseleave="handleLeave"
  >
    <div class="img-box" ref="inner" :style="imgPosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="tranText"
      />
    </div>
    <div class="text">
      <h3 ref="tit">{{ carousel.title }}</h3>
      <p ref="des">{{ carousel.description }}</p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      desWidth: 0,
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  props: ["carousel"],
  mounted() {
    this.desWidth = this.$refs.des.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    imgPosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      //多出的宽度
      const entryWidth = this.innerSize.width - this.containerSize.width;
      const entryHeight = this.innerSize.height - this.containerSize.height;
      const x = (-entryWidth / this.containerSize.width) * this.mouseX;
      const y = (-entryHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    tranText() {
      const styTit = this.$refs.tit.style;
      const styDes = this.$refs.des.style;
      styTit.opacity = 1;
      styDes.width = 0;
      styDes.opacity = 1;
      this.$refs.des.clientWidth;
      styDes.width = this.desWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };
    },
    handleMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
.carouseItem-contianer {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .img-box {
    width: 120%;
    height: 120%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .text {
    position: absolute;
    left: 50px;
    top: 50%;
    color: rgb(248, 247, 245);
    letter-spacing: 5px;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 1px #000;
    h3 {
      font-size: 2rem;
      opacity: 0;
      transition: 1s;
    }
    p {
      font-size: 1.2rem;
      color: rgb(250, 248, 245);
      transition: 2s 1s;
      opacity: 0;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>

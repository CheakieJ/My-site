<template>
  <div class="home-container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      ref="container"
      :style="{ marginTop }"
      @transitionend="listenTans"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div
      v-show="this.index > 0"
      class="icon icon-up"
      @click="change(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="this.index < this.data.length - 1"
      class="icon icon-down"
      @click="change(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="slot">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="change((index = i))"
      ></li>
    </ul>
    <Loader v-if="loadingShow" />
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import Loader from "@/components/Loader";
import fetchData from "@/mixins/fetchData.js";
export default {
  components: {
    CarouselItem,
    Icon,
    Loader,
  },
  mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      listenData: false,
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.resizeData);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeData);
  },

  methods: {
    change(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.listenData) {
        return;
      }
      if (e.deltaY < -15 && this.index > 0) {
        this.listenData = true;
        this.index--;
      } else if (e.deltaY > 15 && this.index < this.data.length - 1) {
        this.listenData = true;
        this.index++;
      }
    },
    listenTans() {
      this.listenData = false;
    },
    async fetchData() {
      console.log(this.loadingShow);
      return await getBanners();
    },
  },
  resizeData() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .icon {
    .iconfont {
      font-size: @gap;
      color: @gray;
    }
    position: absolute;
    left: 50%;
    @gap: 25px;
    transform: translateX(-50%);
    cursor: pointer;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
  }
  @jumpY: 10px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, -@jumpY);
    }
    50% {
      transform: translate(-50%, @jumpY);
    }
    100% {
      transform: translate(-50%, -@jumpY);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, @jumpY);
    }
    50% {
      transform: translate(-50%, -@jumpY);
    }
    100% {
      transform: translate(-50%, @jumpY);
    }
  }
  .slot {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    li {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: transparent;
      margin: 10px;
      cursor: pointer;
      &.active {
        background-color: #f40;
      }
    }
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s ease-out;
    li {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

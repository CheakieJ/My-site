<template>
  <div class="Pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disable: current == 1 }">首页</a>
    <a @click="handleClick(current - 1)" :class="{ disable: current == 1 }"
      >上一页</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disable: current === pageNumber }"
      >下一页</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disable: current === pageNumber }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      //当前页
      type: Number,
      default: 1,
    },
    total: {
      //总数据量
      type: Number,
      default: 0,
    },
    limit: {
      //页容量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //可见页数
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    min() {
      let mi = this.current - Math.ceil(this.visibleNumber / 2);
      if (mi < 1) {
        mi = 1;
      }
      return mi;
    },
    max() {
      let ma = this.min + this.visibleNumber - 1;
      if (ma >= this.pageNumber) {
        ma = this.pageNumber;
      }
      return ma;
    },
    numbers() {
      let arr = [];
      for (let i = this.min; i <= this.max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage == this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  height: 25px;
  line-height: 25px;
  a {
    cursor: pointer;
    color: @primary;
    margin: 0 6px;
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

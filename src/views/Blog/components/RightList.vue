<template>
  <div class="right-contianer">
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <span @click="handleItem(item)" :class="{ active: item.active }">{{
          item.name
        }}</span>
        <span
          v-if="item.aside"
          class="aside"
          :class="{ active: item.active }"
          @click="handleItem(item)"
          >{{ item.aside }}</span
        >
        <RightList :list="item.children" @selected="handleItem(item)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleItem(item) {
      this.$emit("selected", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-contianer {
  height: 100%;
  ul {
    list-style: none;
    padding: 0;
    height: 80%;
    overflow-y: auto;
    ul {
      margin-left: 1rem;
    }
    li {
      min-height: 40px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      .active {
        color: @warn;
        font-weight: bold;
      }
    }
    .aside {
      color: @gray;
      margin-left: 1em;
      font-size: 12px;
    }
  }
}
</style>

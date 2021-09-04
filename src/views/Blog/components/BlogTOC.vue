<template>
  <div class="BlogTOC-container">
    <h2>目录</h2>

    <RightList :list="isActive" @selected="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    isActive() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          active: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    //拿到所有的标题元素
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    selected() {
      const range = 200;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.selectDebounce = debounce(this.selected);
    this.$bus.$on("mainContainer", this.selectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainContainer", this.selectDebounce);
  },
};
</script>

<style lang="less" scoped>
.BlogTOC-container {
  position: relative;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  h2 {
    margin: 0;
    font-size: 15px;
  }
}
</style>

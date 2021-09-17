<template>
  <div class="bloglist-container">
    <ul class="data-container" ref="mainScroll">
      <li class="data-content" v-for="item in data.rows" :key="item.id">
        <a href="" class="img" v-if="item.thumb">
          <img v-lazy="item.thumb" alt="" />
        </a>
        <div class="content">
          <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }"
            ><h2>{{ item.title }}</h2></router-link
          >
          <div class="des">
            <span>日期：{{ formatTime(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'BlogCategory',
                params: { categoryId: item.category.id },
              }"
              >分类：{{ item.category.name }}</router-link
            >
          </div>
          <div class="introduce">
            {{ item.description }}
          </div>
        </div>
      </li>
      <Pager
        :current="routeInfo.page"
        :total="data.total"
        :limit="routeInfo.limit"
        :visibleNumber="10"
        @pageChange="handlePageChange"
        v-if="data.rows"
      />
    </ul>
    <Empty v-if="!data.rows && !loadingShow" />
    <Loader v-if="loadingShow" />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import Pager from "@/components/Pager";
import { formatTime } from "@/utils";
import Loader from "@/components/Loader";
import Empty from "@/components/Empty";
export default {
  components: {
    Pager,
    Loader,
    Empty,
  },
  mixins: [fetchData({})],

  methods: {
    formatTime,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
    scrolled() {
      this.$bus.$emit("mainScroll", this.$refs.mainScroll);
    },
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  //监听路由信息的变化
  watch: {
    async $route() {
      this.loadingShow = true;
      this.data = await this.fetchData();
      this.loadingShow = false;
    },
  },
  mounted() {
    this.$refs.mainScroll.addEventListener("scroll", this.scrolled);
  },
  beforeDestroy() {
    this.$refs.mainScroll.removeEventListener("scroll", this.scrolled);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.bloglist-container {
  height: 100%;
  ul,
  li,
  h2 {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  padding: 20px 10px;
  box-sizing: border-box;
  .data-container {
    height: 100%;
    overflow-y: auto;
    .data-content {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      overflow: hidden;
      margin: 20px 0;
      cursor: pointer;
      .img {
        display: block;
        float: left;
        width: 200px;
        height: 150px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        float: right;
        width: calc(100% - 220px);
        height: 150px;
        margin-left: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid @gray;
        padding-bottom: 20px;
        overflow: hidden;
        .des {
          width: 100%;
          color: @gray;
          font-size: 12px;
          padding: 5px;
          span {
            display: inline-block;
            margin-right: 20px;
          }
        }
        .introduce {
          padding: 10px 0;
          overflow: hidden;

          display: -webkit-box; /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          -webkit-box-orient: vertical; /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-line-clamp: 3; /*用来限制在一个块元素显示的文本的行数,非CSS规范*/
          overflow: hidden;
        }
      }
    }
  }
}
</style>

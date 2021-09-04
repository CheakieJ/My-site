//公共的远程获取代码
export default function(defaultData = null) {
  return {
    data() {
      return {
        data: defaultData,
        loadingShow: true,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.loadingShow = false;
    },
  };
}

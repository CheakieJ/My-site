<template>
  <div id="app">
    <ImageLoader
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F58c2193c41fa3.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630582557&t=3289e639e45168c66b2834000f984c92"
      placeholder="https://img2.baidu.com/it/u=1179433871,2021052630&fm=26&fmt=auto&gp=0.jpg"
      :duration="1000"
      @load="show"
    />
  </div>
</template>
<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    show() {
      console.log(124);
    },
  },
};
</script>
<style scoped>
.img-loader-container {
  width: 600px;
  height: 500px;
}
</style>

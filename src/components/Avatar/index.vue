<template>
  <img
    class="avatar-container"
    :src="url"
    alt="Image"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
import img from "@/assets/greatwall.jpg";
export default {
  props: {
    url: {
      type: String,
      default: img,
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>
<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  color: #fff;
}
</style>

<template>
  <div class="message-container" ref="container">
    <Message />
  </div>
</template>

<script>
import Message from "@/components/MessageArea";
export default {
  components: {
    Message,
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 80%;
  height: 100%;
  padding: 30px;
  overflow-y: auto;
}
</style>

<template>
  <div class="messagearea-contianer">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>({{ subTitle }})</span>
    </h3>
    <DataList :list="list" />
  </div>
</template>

<script>
import DataForm from "./dataForm.vue";
import DataList from "./dataList.vue";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

<template>
  <form
    @submit.prevent="handleSubmit"
    id="dataform-contianer"
    class="dataform-container"
    ref="form"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="请输入用户名"
          maxlength="10"
          v-model="formData.nickname"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.name }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="请输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="from-item">
      <div class="button-area">
        <button :disabled="isSubmit">
          {{ isSubmit ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        name: "",
        content: "",
      },
      isSubmit: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.name = this.formData.nickname == "" ? "请输入昵称" : "";
      this.error.content = this.formData.content == "" ? "请输入内容" : "";
      if (this.error.name || this.error.content) {
        return;
      }
      this.isSubmit = true;
      this.$emit("submit", this.formData, () => {
        this.isSubmit = false;
        this.formData.nickname = "";
        this.formData.content = "";
        this.$showMessage({
          type: "success",
          content: "评论成功",
          container: this.$refs.form,
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>

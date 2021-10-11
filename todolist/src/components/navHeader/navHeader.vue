<template>
  <div>
    <input
      v-model="message"
      @keydown.enter="getMessage()"
      placeholder="请输入任务名称"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "navHeader",
  setup(props, ctx) {
    let message = ref("");

    // 按回车确认
    let getMessage = () => {
      // 将输入框的内容传递给父组件
      ctx.emit('add', message.value);
      //清空输入框
      message.value = '';
    };
    return { message, getMessage };
  },
};
</script>

<style scoped></style>

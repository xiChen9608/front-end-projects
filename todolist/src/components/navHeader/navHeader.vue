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
  setup() {
    let message = ref("");

    let getMessage = () => {
      console.log(message.value);
    };
    return { message, getMessage };
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <div>已完成{{ isComplete }} / 全部 {{ all }}</div>
    <button v-if="isComplete > 0" @click="clearUp()">清除已完成</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "navFooter",
  setup() {
    let isComplete = ref(1);
    let all = ref(3);
    let clearUp = () => {
      console.log("clearUp");
    };
    return {
      isComplete,
      all,
      clearUp,
    };
  },
};
</script>

<style scoped></style>

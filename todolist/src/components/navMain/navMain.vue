<template>
  <div v-for="(item, index) in list" :key="item.index">
    <input type="checkbox" v-model="item.complete" />
    {{ item.title }}
    <button @click="del(item, index)">删除</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "navMain",
  setup() {
    let list = ref([
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "看剧",
        complete: false,
      },
    ]);

    let del = (item, index) => {
      console.log(item, index);
    };
    return { list, del };
  },
};
</script>

<style scoped></style>

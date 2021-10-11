<template>
<div v-if="list.length >0">
  <div v-for="(item, index) in list" :key="item.index">
    <input type="checkbox" v-model="item.complete" />
    {{ item.title }}
    <button @click="del(item, index)">删除</button>
  </div>
</div>
<div v-else>
  暂无任务
</div>

</template>

<script>
import { ref } from "vue";
export default {
  name: "navMain",
  props:{
    list:{
      type: Array,
      required: true,
    }
  },
  emits: ['del'],
  setup(props, ctx) {
    let del = (item, index) => {
      ctx.emit('del', index);
    };
    return { del };
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <div>已完成{{ isComplete }} / 全部 {{ list.length }}</div>
    <button v-if="isComplete >= 0" @click="clearUp()">清除已完成</button>
  </div>
</template>

<script>
import { ref,computed } from "vue";

export default {
  name: "navFooter",
  props: {
    list:{
      type: Array,
      requeried: true,
    }
  },
  setup(props, ctx) {
    let isComplete = computed(()=>{
      return props.list.filter((item)=>{ return item.complete}).length;
    });
    let clearUp = () => {
      let arr = props.list.filter((item)=>{ return !item.complete});
      ctx.emit('clear', arr);
    };
    return {
      isComplete,
      clearUp,
    };
  },
};
</script>

<style scoped></style>

<template>
<div>
  {{completed}} 已完成 |  {{list.length}} 全部任务
  <button @click="clear">清除已完成</button>
</div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  name: 'TodoFooter',
  props:{
    list:{
      type: Array,
      required: true,
    }
  },
  setup(props, ctx) {
    let completed = computed(()=>{
      return props.list.filter((item)=>{return item.complete}).length;
    })
    let clear = ()=>{
      let arrFilter = props.list.filter((item)=>{return !item.complete});
      ctx.emit('clear', arrFilter);
    }
    return {completed, clear}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
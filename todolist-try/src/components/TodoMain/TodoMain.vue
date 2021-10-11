<template>
<div v-if="list.length >0">
  <div v-for="(item,index) in list" :key="index">
    <input type="checkbox"  v-model="item.complete" />
    {{item.title}}
    <button @click="del(index)">删除</button>
  </div>
</div>
<div v-else>
  暂无任务
</div>
</template>

<script>
export default {
  name: 'TodoMain',
  props:{
    list:{
      type: Array,
      required: true,
    }
  },
  setup(props,ctx){

    let del = (val)=>{
      ctx.emit('del', val);
    }
    return {del}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
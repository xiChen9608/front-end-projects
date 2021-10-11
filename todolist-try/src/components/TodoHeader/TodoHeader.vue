<template>
<input v-model="message" placeholder="edit me" @keyup.enter="add"/>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'TodoHeader',
  setup(props,ctx){
    let message = ref("");
    let add = () =>{
      ctx.emit('add',message.value);
      message.value = '';
    }
    return {message, add}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
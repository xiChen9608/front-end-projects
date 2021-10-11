<template>
<todo-header @add="add"></todo-header>
<todo-main :list="list" @del="del"></todo-main>
<todo-footer :list="list" @clear="clear"></todo-footer>
</template>

<script>
import TodoHeader from "@/components/TodoHeader/TodoHeader.vue"
import TodoMain from '../components/TodoMain/TodoMain.vue'
import TodoFooter from '../components/TodoFooter/TodoFooter.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Home',
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  setup(){
      const store = useStore();
      let list =  computed(() => store.state.list); 

      let add = (val)=>{
          let addFlag = true;
          list.value.map((item)=>{
              if(item.title === val){
                  addFlag = false;
                  alert('任务已存在');
              }
          })
          if(addFlag){
            store.commit('addTodo', {
            title: val,
            complete: false,
          })
          }
      }

      let del = (val) =>{
          store.commit('delTodo', val);
      }
      
      let clear = (val) =>{
          store.commit('clearTodo', val);
      }
      return {list, add, del, clear}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
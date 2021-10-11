<template>
  <navHeader @add='add'></navHeader>
  <navMain :list='list' @del="del"></navMain>
  <navFooter :list='list' @clear="clear"></navFooter>
</template>

<script>
import navHeader from "@/components/navHeader/navHeader.vue"
import navMain from "@/components/navMain/navMain.vue"
import navFooter from "@/components/navFooter/navFooter.vue"

import {ref,computed} from "vue"
import {useStore} from "vuex"

export default {
  name: "Home",
  components:{
    navHeader,
    navMain,
    navFooter
  },
  setup(props, context){
    let store = useStore();
    let list = computed(()=>{
      return store.state.list;
    })


    //添加任务
    let add = (val) =>{
      let flag = true;
      list.value.map((item)=>{
        if(item.title === val){
          flag = false;
          alert("任务已存在");
        }
      })
      if(flag){
        store.commit('addTodo',{
        title: val,
        complete: false
      })
      }
    }

    //删除任务
    let del = (val) => {
      store.commit('delTodo',val);
    }

    //清除任务
    let clear = (val)=>{
      store.commit('clearTodo',val);
    }

    return {add, list, del, clear}
  },
}
</script>

<style lang="scss" scoped>

</style>

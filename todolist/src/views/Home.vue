<template>
  <navHeader></navHeader>
  <navMain></navMain>
  <navFooter></navFooter>
  {{list}}
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
    return {list}
  },
}
</script>

<style lang="scss" scoped>

</style>

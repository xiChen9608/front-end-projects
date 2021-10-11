<template>
  <button @click="start"> 开始todolist </button>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: "Start",
  setup(props, context){
    let router = useRouter();
    let start = () => {
      router.push({
        path:'/home'
    })
    }
    return {start}
  },
}
</script>

<style lang="scss" scoped>

</style>


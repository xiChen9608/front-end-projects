<template>
  <GreedySnake/>
</template>

<script>
import GreedySnake from './components/GreedySnake.vue'

export default {
  name: 'App',
  components: {
    GreedySnake
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

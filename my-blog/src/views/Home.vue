<template>
  <el-container>
    <el-header>
      <el-affix :offset="0">
        <blog-head></blog-head>
      </el-affix>
    </el-header>
    <el-main>  <router-view></router-view> </el-main>
  </el-container>


</template>

<script>
import BlogHead from "../components/blogHead/BlogHead.vue";

export default {
  name: "Home",
  components: {
    BlogHead,
  },
};
</script>

<style scoped>
.el-container{
  width:100%;
  height:100%;
}
</style>

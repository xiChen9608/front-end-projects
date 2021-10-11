<template>
<el-row data-aos="fade-down">
  <el-col :span="6" class="myLogo">
    <div class="logo-img-box">
      <img src="../../assets/img/logo.png" alt="">
    </div>

  </el-col>
  <el-col :span="18">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="home">Home</el-menu-item>
    <el-menu-item index="aboutme">About Me</el-menu-item>
    <el-menu-item index="life" disabled>Life</el-menu-item>
    <el-menu-item index="blog" disabled>Blog</el-menu-item>
  </el-menu>
  </el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'BlogHead',
  setup(){
    const router = useRouter()
    const activeIndex = ref('home')
    const handleSelect = (key) => {
      router.push('/'+key);
    }
    return {activeIndex, handleSelect}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu--horizontal{
    border-bottom: 0px;
    justify-content: flex-end;
  }
  .myLogo{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .logo-img-box{
    width:130px;
  }
  .logo-img-box img{
    height:100%;
    width:100%;
  }
  .el-row{
    background-color:white;
    border-bottom: 1px solid #DCDFE6;
  }
</style>
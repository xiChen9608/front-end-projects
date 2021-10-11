<template>
  <div class="mainBox">
    <div class="img-content" data-aos="flip-up">
      <h1 class="img-title">Xi Chen's Homepage</h1>
      <p class="img-description">Nice to meet you!</p>
    </div>
    <div class="img">
      <img
        v-lazy="
          'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0386296a30942b399e2916816a520c8d54ccb107a9a6f9452049c44cd0aa4a2cc1210a9aa000402e7ba3b210a858b13e?pictype=scale&from=30013&version=3.3.3.3&uin=2248410897&fname=pexels-simon-migaj-747964.jpg&size=750'
        "
        :key="
          'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0386296a30942b399e2916816a520c8d54ccb107a9a6f9452049c44cd0aa4a2cc1210a9aa000402e7ba3b210a858b13e?pictype=scale&from=30013&version=3.3.3.3&uin=2248410897&fname=pexels-simon-migaj-747964.jpg&size=750'
        "
        class="image"
      />
    </div>
    <!-- <div class="my-content" data-aos="fade-up">
      <about-me></about-me>
    </div> -->
  </div>
</template>

<script>
// import AboutMe from '../../views/aboutMe/AboutMe.vue';

export default {
  // components: { AboutMe },
  name: "BlogMain",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainBox{
    width: 100%;
    height: 100%;
    position: relative;
}
.img{
    height: 90%;
    width: 100%;
}
.image{
  width: 80%;
  max-height: 100%;
  display: block;
  margin:auto;
  /* object-fit: cover; */
}
.img-title {
  text-shadow: -1px 1px 0 #ddd, -2px 2px 0 #c8c8c8, -3px 3px 0 #ccc,
    -4px 4px 0 #b8b8b8, -4px 4px 0 #bbb, 0px 1px 1px rgba(0, 0, 0, 0.4),
    0px 2px 2px rgba(0, 0, 0, 0.3), -1px 3px 3px rgba(0, 0, 0, 0.2),
    -1px 5px 5px rgba(0, 0, 0, 0.1), -2px 8px 8px rgba(0, 0, 0, 0.1),
    -2px 13px 13px rgba(0, 0, 0, 0.1);
}
.img-content{
  position: absolute;
  width: 400px;
  left: calc(50% - 200px);
  top: 150px;
  /* margin-left: -50%; */
  color: #faf9f9;
}
/* .my-content{
  width: 100%;
  height: 0%;
  background: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
} */
</style>

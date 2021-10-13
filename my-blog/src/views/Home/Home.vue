<template>
  <div class="mainBox">
    <div class="img-content" data-aos="flip-up">
      <p class="img-title">Xi Chen's Homepage</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogMain",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainBox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.img-title {
  text-shadow: -1px 1px 0 #ddd, -2px 2px 0 #c8c8c8, -3px 3px 0 #ccc,
    -4px 4px 0 #b8b8b8, -4px 4px 0 #bbb, 0px 1px 1px rgba(0, 0, 0, 0.4),
    0px 2px 2px rgba(0, 0, 0, 0.3), -1px 3px 3px rgba(0, 0, 0, 0.2),
    -1px 5px 5px rgba(0, 0, 0, 0.1), -2px 8px 8px rgba(0, 0, 0, 0.1),
    -2px 13px 13px rgba(0, 0, 0, 0.1);
}

.img-content{
  width: 90%;
  height: 500px;
  background: url('https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0386296a30942b399e2916816a520c8d54ccb107a9a6f9452049c44cd0aa4a2cc1210a9aa000402e7ba3b210a858b13e?pictype=scale&from=30013&version=3.3.3.3&uin=2248410897&fname=pexels-simon-migaj-747964.jpg&size=750') no-repeat;
}
.img-content p{
  text-align: center;
  line-height: 500px;
  color: whitesmoke;
  font-size:max(1em, min(4em, 5.333vw));
}
</style>

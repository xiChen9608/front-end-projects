<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="8" class="card-l">
        <div class="me_img"><img src="../../assets/img/img.jpg" /></div>
        <h4>Xi Chen (陈茜)</h4>
        <p style="color: darkgrey">Master student</p>
        <a class="school" href="#" @click="go(siat)"
          >Shenzhen Institutes of Advanced Technology Chinese Academy of
          Sciences</a
        >
        <div class="concat_img">
          <img @click="go('git')" src="../../assets/img/github.png" />
          <a href="mailto:xi.chen2@siat.ac.cn">
            <img src="../../assets/img/email.png"
          /></a>
        </div>
      </el-col>

      <el-col :span="16" class="card-r">
        <h4 style="text-decoration: underline">About Me</h4>
        <p style="line-height: 1.8">
          Xi Chen (陈茜), a master student in the Department of Computer
          Technology, Shenzhen Institutes of Advanced Technology Chinese Academy
          of Sciences. I am working at
          <a href="#" @click="go('ml')">Multimedia Lab</a>, under the
          supervision of <a href="#" @click="go('zw')">Prof.Wei Zeng.</a>

          Her research interests focus on data visualization.
          <b
            >She is currently looking for a job as a data visualization
            engineer!</b
          >
        </p>
        <h4 style="text-decoration: underline">Experience</h4>
        <div class="block">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="activity.color"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
    </el-row>
  </el-card>
  
</template>

<script>
export default {
  name: "AboutMe-1",
  setup() {
    let activities = [
      {
        content: "Chinese Acadamy Of Sciences, Shenzhen, China",
        timestamp: "2019.5 - Now",
        color: "#0bbd87",
      },
      {
        content: "HuBei University, Wuhan, China",
        timestamp: "2014.09 - 2018.07",
      },
    ];

    let goMap = new Map();
    goMap
      .set("zw", "https://zeng-wei.com/")
      .set("ml", "http://mmlab.siat.ac.cn/")
      .set("siat", "http://www.siat.ac.cn/")
      .set('git', 'https://github.com/xiChen9608?tab=repositories');

    let go = (val) => {
      window.open(goMap.get(val));
    };
    return {
      activities,
      go,
    };
  },
};
</script>

<style scoped>
.box-card {
  width: 90%;
  margin: 0 auto;
}

.card-l .me_img {
  padding-top: 5%;
}
.card-l .me_img img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.concat_img {
  padding-top: 5%;
}
.concat_img img {
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 5px;
}

.card-r {
  text-align: left;
}
p,
.school {
  font-size: 15px;
}
.el-timeline {
  font-size: 15px;
}

a {
  color: #337ab7;
  text-decoration-line: none;
}

a:hover{
  color: #23527c;
  text-decoration: underline;
}
</style>

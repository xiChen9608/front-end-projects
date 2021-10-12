<template>
  <el-card class="box-card" >
    <h4 style="text-decoration: underline">Publications</h4>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          placement="top"
          v-for="(item, index) in publications"
          :key="index"
          class="publicaions"
        >
          <el-card>
            <el-row>
              <el-col :span="8" class="imgContainer">
                <div class="imgBox">
                  <img :src="item.url" />
                </div>
              </el-col>
              <el-col :span="16" class="detailContainer">
                <div class="item">
                  {{ item.title }}
                </div>
                <div class="item" v-html="item.author"></div>
                <div class="item">
                  {{ item.doi }}
                </div>
                <div class="detailLinks">
                  <div v-if="item.hasOwnProperty('preprint')">
                    [<a @click="go(item.Preprint)">Preprint</a>]
                  </div>
                  <div v-if="item.hasOwnProperty('homepage')">
                    [<a @click="go(item.homepage)">Homepage</a>]
                  </div>
                  <div v-if="item.hasOwnProperty('video')">
                    [<a @click="go(item.video)">Video</a>]
                  </div>
                  <div v-if="item.hasOwnProperty('data')">
                    [<a @click="go(item.data)">Data</a>]
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "AboutMe-2",
  setup() {
    let publications = {
      "1": {
        title:
          "Modeling Layout Design for Multiple-View Visualization via Bayesian Inference",
        author:
          "<p style='margin-top:0px;margin-bottom:0px'>Lingdan Shao, Zhe Chu, <b>Xi Chen</b>, Yanna Lin, Wei Zeng*.</p>",
        doi:
          "Journal of Visualization (Proc. ChinaVis 2021 Best Paper Honorable Mention),vol. xxx, pp. 1-16, 2021.",
        url: require("../../assets/img/MVLayout.png"),
        preprint: "https://doi.org/10.1007/s12650-021-00781-z",
        homepage: "https://lingdan33.github.io/bayesmvlayout/",
      },
      "2": {
        title:
          "Composition and Configuration Patterns in Multiple-View Visualizations",
        author:
          "<p style='margin-top:0px;margin-bottom:0px'><b>Xi Chen</b>, Wei Zeng*, Yanna Lin, Hayder Mahdi Al-maneea, Jonathan C Roberts, Remco Chang.</p>",
        doi:
          "IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis 2020), 27:1514-1524, 2021.",
        url: require("../../assets/img/multiple_view.png"),
        preprint: "https://arxiv.org/abs/2007.15407",
        homepage: "https://mvlandscape.bitbucket.io/",
        video: "https://www.youtube.com/watch?v=WSPCbIdDnFQ&ab_channel=ZengWei",
        data: "https://valt.cs.tufts.edu/papers/multiple-view/mv_data.zip",
      },
      "3": {
        title:
          "VIStory:Interactive Storyboard for Exploring Visual Information in Scientific Publication",
        author:
          "<p style='margin-top:0px;margin-bottom:0px'>Wei Zeng, Ao Dong, <b>Xi Chen</b>, Zhanglin Cheng.</p>",
        doi:
          "Journal of Visualization (Proc. VINCI 2019 Best Paper), vol. 24, no. 1, pp. 69-84, 2021.",
        url: require("../../assets/img/2019_Vistory.jpg"),
        preprint:
          "https://link.springer.com/article/10.1007/s12650-020-00688-1",
        homepage: "https://dongoa.github.io/projects/VIStory/index.html",
      },
    };

    let go = (val) => {
      window.open(val);
    };
    return { publications, go };
  },
};
</script>

<style scoped>
.box-card {
  width: 90%;
  margin: 20px auto;
}
.publicaions {
  font-size: 15px;
  text-align: left;
}
.imgBox {
  width: 250px;
  height: 150px;
  margin: auto;
  display: flex;
  align-items: center;
}

.imgBox img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border: 2px lightgrey solid;
}

.item {
  margin: 0px 0px;
  line-height: 1.8;
}
a {
  color: #337ab7;
  text-decoration-line: none;
  cursor: pointer;
}

a:hover {
  color: #23527c;
  text-decoration: underline;
  cursor: pointer;
}
.detailLinks {
  display: flex;
}
</style>

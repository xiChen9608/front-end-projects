<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-row>
        <el-card class="mgb20">
          <el-row :gutter="30">
            <el-col :span="12">
              HELLO!
            </el-col>
            <el-col :span="12">
              ME!
            </el-col>
          </el-row>
          <el-row></el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>具备技能</span>
            </div>
          </template>
          <el-row :gutter="30">
            <el-col :span="12">
              <el-progress type="dashboard" :percentage="10" color="#f56c6c">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">吃</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12">
              <el-progress type="dashboard" :percentage="20" color="#1989fa">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">喝</span>
                </template>
              </el-progress>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="12">
              <el-progress type="dashboard" :percentage="30" color="#5cb87a">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">玩</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12">
              <el-progress type="dashboard" :percentage="40" color="#e6a23c">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">躺</span>
                </template>
              </el-progress>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>代办事项</span>
          </div>
        </template>
        <el-row>
          <el-col :span="18">
            <el-input v-model="input" placeholder="请输入代办事项" />
          </el-col>
          <el-col :span="6">
            <el-button class="button" type="text" @click="add">添加</el-button>
          </el-col>
        </el-row>
        <el-checkbox-group v-model="checkList">
          <div v-for="(item,index) in checks" :key="index">
            <el-checkbox :label = item />
          </div>
        </el-checkbox-group>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue';

export default {
  name: "HomePage",
  setup(){
    const checkList = ref([]);
    let input = ref('');
    const checks = ref([
      "干饭xxxxxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
      "干饭饭xxxxxxxxxxx",
    ]);
    let add = () =>{
      checks.value.push(input.value);
      input.value = '';
    }

    return {checkList, checks, input,add}
  }
};
</script>

<style scoped>
.mgb20 {
  margin-bottom: 20px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
}

.el-card {
  width: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-checkbox-group{
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>登录页面</span>
      </div>
    </template>
    <el-form
      :model="param"
      :rules="rules"
      ref="login"
      label-width="0px"
      class="ms-content"
    >
      <el-form-item prop="username">
        <el-input v-model="param.username" placeholder="username">
          <template #prepend>
            <el-button icon="el-icon-user"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="password"
          v-model="param.password"
          @keyup.enter="submitForm()"
        >
          <template #prepend>
            <el-button icon="el-icon-lock"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
      <p class="login-tips">Tips : 用户名和密码随便填。</p>
    </el-form>
  </el-card>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const param = reactive({
      username: "admin",
      password: "123123",
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    const login = ref(null);
    const submitForm = () => {
      login.value.validate((valid) => {
        if (valid) {
          ElMessage.success("登录成功");
          localStorage.setItem("ms_username", param.username);
          router.push("/dashboard");
          
        } else {
          ElMessage.error("登录成功");
          return false;
        }
      });
    };
    return { login, rules, param,submitForm };
  },
};
</script>

<template>
  <div class="dheader">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">
      后台管理系统
    </div>
    <div class="nhead-right">
      <!-- 消息未读 -->
      <div class="nhead-right-box">
        <div class="btn-bell">
        <el-tooltip
          class="item"
          effect="dark"
          :content="unreadMessage != 0? `有${unreadMessage}未读消息`:`消息中心`"
          placement="bottom"
        >
          <div class="el-icon-bell"></div>
        </el-tooltip>
         <div v-if="unreadMessage != 0" class="btn-bell-badge"></div>
      </div>
            <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人主页 </el-dropdown-item>
            <el-dropdown-item
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue-demi";
// @ is an alias to /src
import { useStore } from "vuex";

export default {
  name: "DHead",
  setup() {
    const username = localStorage.getItem("ms_username");

    let store = useStore();
    let collapse = computed(() => store.state.collapse);

    let collapseChage = () => {
      store.commit("handleCollapse");
    };

    //messge
    let unreadMessage = computed(()=>store.state.message.unread.length)

    return { collapse, collapseChage, unreadMessage,username };
  },
};
</script>

<style scoped>
.dheader {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    background: #242f42;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.dheader .logo {
    float: left;
    width: 250px;
    line-height: 70px;
    text-align: left;
}
.nhead-right {
    float: right;
    padding-right: 50px;
}
.btn-bell{
  display: flex;
  height: 70px;
  align-items: center;
}
.nhead-right-box{
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-bell-badge {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
    margin-left:20px;
}
</style>
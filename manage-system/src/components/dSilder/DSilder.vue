<template>
  <div class="sidebar">
    <el-menu
      router
      default-active="goRoutes"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
    >
      <template v-for="(item, index) in items" :key="index">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue-demi";
import { useRoute } from "vue-router";

export default {
  name: "DSlider",
  setup() {
    let store = useStore();
    let collapse = computed(() => store.state.collapse);

    const items = [
      {
        icon: "el-icon-s-home",
        index: "/dashboard",
        title: "系统首页",
      },
      {
        icon: "el-icon-copy-document",
        index: "/dashboard/basistable",
        title: "基础表格",
      },
      {
        icon: "el-icon-message",
        index: "/dashboard/message",
        title: "消息",
      },
      {
        icon: "el-icon-folder-delete",
        index: "7",
        title: "错误处理",
        subs: [
          {
            index: "/permission",
            title: "权限测试",
          },
          {
            index: "/404",
            title: "404页面",
          },
        ],
      },
    ];


    const route = useRoute();

    const goRoutes = computed(() => {
      console.log(route.path);
      return route.path;
    });
    return { collapse, items, goRoutes };
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  text-align: left;
  background-color: rgb(50, 65, 87);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

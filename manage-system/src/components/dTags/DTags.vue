<template>
  <el-tag
    v-for="tag in tagList"
    :class="{ active: isActive(tag.path) }"
    :key="tag"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    <router-link :to="tag.path" class="tags-li-title">
      {{tag.title}}
    </router-link>
  </el-tag>
</template>

<script>
// @ is an alias to /src
import { computed } from "vue-demi";
// @ is an alias to /src
import { useStore } from "vuex";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

export default {
  name: "DTags",
  setup() {
    let store = useStore();
    let tagList = computed(() => store.state.tagList);
    let istagList = computed(() => store.state.istagList);
    const router = useRouter();

    let handleClose = (tag) => {
      store.commit("removeTagList", tag);
      console.log(istagList)
      if(!istagList.value){
        router.push("/dashboard");
      }
    };


    const route = useRoute();
    let setTags = (route) => {
      store.commit("addTagList", {
        name: route.name,
        title: route.meta.title,
        path: route.fullPath,
      });
    };
    setTags(route);
    onBeforeRouteUpdate((to) => {
      setTags(to);
    });

    const isActive = (path) => {
      return path === route.fullPath;
    };
    return { tagList, handleClose, isActive };
  },
};
</script>

<style scoped>
.el-tag.active {
  background-color: #409eff;
  color: #fff;
}

/* .el-tag.active i.el-tag__close.el-icon-close{
  color: black;
} */
</style>

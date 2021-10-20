<template>
  <d-head></d-head>
  <d-silder></d-silder>
  <div class="container" :class="{ 'content-collapse': collapse }">
    <d-tags></d-tags>
    <router-view></router-view>
  </div>
</template>

<script>
import DHead from "../../components/dHead/DHead.vue";
import DSilder from "../../components/dSilder/DSilder.vue";
import DTags from "../../components/dTags/DTags.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
// @ is an alias to /src

export default {
  components: { DHead, DSilder, DTags },
  name: "Dashboard",
  setup() {
    let router = useRouter();
    let goto = (val) => {
      router.push("/dashboard/" + val);
    };

    const store = useStore();
    const collapse = computed(() => store.state.collapse);
    return { goto, collapse };
  },
};
</script>

<style scoped>
.container{
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.container.content-collapse{
    left: 63px;
}
</style>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css"
import VueLazyLoad from "vue3-lazy"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

AOS.init();
createApp(App).use(router).use(AOS).use(VueLazyLoad,{
    loading: require('./assets/img/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
    error: require('./assets/img//error_img.jpg')  //加载失败图片
}).use(ElementPlus).mount('#app')

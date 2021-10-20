import { createStore } from 'vuex'


export default createStore({
  state: {
    collapse: false,
    message: {
      unread: [
        {
            date: "2018-04-19 20:00:00",
            title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
            date: "2018-04-19 21:00:00",
            title: "今晚12点整发大红包，先到先得",
        },
    ],
    },
    tagList: [],
    istagList: true,
  },
  mutations: {
    handleCollapse(state){
      state.collapse = !state.collapse;
    },
    addTagList(state, payload){
      let isExist = state.tagList.some((item)=>{
        return item.name == payload.name;
      });
      if(!isExist){
        state.tagList.push(payload);
      }
    },
    removeTagList(state, payload){
      let index = state.tagList.indexOf(payload);
      state.tagList.splice(index,1);
      if(state.tagList.length == 0){
        state.istagList = false;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "看剧",
        complete: false,
      },
    ]
  },
  mutations: {
    addTodo(state,payload){
      state.list.push(payload);
    },
    delTodo(state,payload){
      state.list.splice(payload,0,1);
    },
    clearTodo(state,payload){
      //讲过滤的数组传进来
      state.list = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

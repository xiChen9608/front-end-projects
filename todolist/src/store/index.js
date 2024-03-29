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
        complete: true,
      },
    ]
  },
  mutations: {
    addTodo(state,payload){
      state.list.push(payload);
    },
    //删除任务 splice(下标，个数)
    delTodo(state,payload){
      state.list.splice(payload,1);
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

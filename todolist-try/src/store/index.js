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
    //添加Todolist
    addTodo(state, payload){
      return state.list.push(payload);
    },
    //删除Todolist
    delTodo(state, payload){
      return state.list.splice(payload,1);
    },
    //清除已完成的Todolist
    clearTodo(state, payload){
      state.list = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

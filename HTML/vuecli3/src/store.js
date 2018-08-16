import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
      countData:10,
      msg:'this is vuex'
  },
  mutations: {
    add(state,num){
      state.countData+=num;
    },
    sub(state){
      state.countData--;
     }
  },
  actions: {
      addNum ({commit},num) {
          num++;
          commit('add',num)
      }
  },
  getters:{
      count100:(state)=>{
      return state.countData+100;
    }


  }
});

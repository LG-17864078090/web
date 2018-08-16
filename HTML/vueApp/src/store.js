import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      backgroundColor:"rgb(33, 150, 243)",
      title:'Movie',
  },
  mutations: {
      changeMenu(state,menu){
      state.backgroundColor = menu.backgroundColor;
      state.title = menu.title;
    }
  },
  actions: {
      changeMenu({commit},menu){
          commit('changeMenu',menu)
      }
  },
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const staticModule = {
  namespaced: true,
  state: {
    text: "test"
  },
  getters: {
    textGetter(state) {
      return state.text.toUpperCase();
    }
  },
  mutations: {
    changeText(state, newValue) {
      state.text = newValue;
    }
  }
}

export default new Vuex.Store({
  state: {},
  modules: {
    staticModule
  }
})

export default {
  namespaced: true,
  state: {
    doesntmatter: 42
  },
  getters: {
    numberGetter(state) {
      return state.doesntmatter
    }
  }
}

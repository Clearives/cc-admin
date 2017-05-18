export const actions = {
  increment ({ commit }) {
    commit('increment')
  },
  decrement ({ commit }) {
    commit('decrement')
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

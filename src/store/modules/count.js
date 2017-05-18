const state = {
  count: 12
}

const getters = {
  getCount: state => {
      return state.count
  }
}

const mutations = {
  increment: state => state.count++,

  decrement: state => state.count--,
}

const actions = {
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

export default {
  state,
  getters,
  actions,
  mutations
}

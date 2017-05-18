import Vue from 'vue'
import Vuex from 'vuex'
import {state, mutations} from './mutations'
import{actions} from './actions'
import * as getters from './getters'
import count from './modules/count'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  modules: {
    count
  },
  actions,
  mutations
})
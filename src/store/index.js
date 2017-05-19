import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import {state, mutations} from './mutations'
import{actions} from './actions'
import * as getters from './getters'
import count from './modules/count'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const logger = createLogger({
  collapsed: false,
  filter (mutation, stateBefore, stateAfter) {
    return mutation.type !== "aBlacklistedMutation"
  },
  mutationTransformer (mutation) {
    return mutation.type
  }
})

export default new Vuex.Store({
  state,
  getters,
  modules: {
    count
  },
  actions,
  mutations,
  plugins: debug ? [logger] : []
})

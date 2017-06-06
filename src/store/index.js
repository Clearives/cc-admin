import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { state, mutations } from './mutations';
import { actions } from './actions';
import getters from './getters';
import home from './modules/home';
import count from './modules/count';
import article from './modules/article';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
const logger = createLogger({
  collapsed: false,
  filter (mutation) {
    return mutation.type !== 'aBlacklistedMutation';
  },
  mutationTransformer (mutation) {
    return mutation.type;
  }
});

export default new Vuex.Store({
  state,
  modules: {
    home,
    count,
    article
  },
  getters,
  actions,
  mutations,
  plugins: debug ? [logger] : []
});

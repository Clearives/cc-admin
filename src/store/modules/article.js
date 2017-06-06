import { getArticle2 } from '../../api/api';

const state = {
  article: {},
  loading: false
};

const getters = {
  article: state => state.article,
  loading: state => state.loading
};

const mutations = {
  getArticle(state, data) {
    state.article = data.article;
    state.loading = data.loading;
  }
};

const actions = {
  getArticleAsync({ commit, state }) {
    let data = {
      article: state.article,
      loading: true
    };
    commit('getArticle', data);
    getArticle2().then((res) => {
      if (res) {
        let data = {
          article: res.data.article,
          loading: false
        };
        commit('getArticle', data);
      }
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

const app = {
  state: {
    sidebar: {
      collapsed: !!+sessionStorage.getItem('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        sessionStorage.setItem('sidebarStatus', 1);
      } else {
        sessionStorage.setItem('sidebarStatus', 0);
      }
      state.sidebar.collapsed = !state.sidebar.collapsed;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
};

export default app;

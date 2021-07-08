// 权限相关，权限对应的是菜单
// state 和 mutations是相对应的
export default {
  state: {
    roles: [],
    menus: []
  },
  mutations: {
    SET_MENUS(state, menus) {
      state.menus = menus;
    },
    SET_ROLES(state, roles) {
      state.roles = roles;
    }
  },
  actions: {
    getAsyncRoutes({commit}, roles) {
      commit('AA', roles);
    }
  }
};
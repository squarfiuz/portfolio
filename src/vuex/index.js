import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      page: 'home'
    }
  },
  mutations: {
    page_change (state, page) {
      state.page = page;
    }
  }
});

export default store;
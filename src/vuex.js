import { createStore } from "vuex";
import { useDark, useToggle } from "@vueuse/core";

const store = createStore({
  state () {
    return {
      is_dark: useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
      }),
      page: 'home'
    }
  },
  mutations: {
    page_change (state, page) {
      state.page = page;
    },
    theme_change (state) {
      state.is_dark = !state.is_dark;
      useToggle(state.is_dark);
    }
  }
});

export default store;
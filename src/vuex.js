import { createStore } from "vuex";
import { useDark, useToggle } from "@vueuse/core";

const store = createStore({
  state () {
    return {
      language: "en",
      is_dark: useDark({
        selector: 'html',
        attribute: 'class',
        valueDark: 'dark',
        valueLight: 'light',
      }),
      page: 'home',
    }
  },
  mutations: {
    change_language (state, language) {
      state.language = language;
    },
    change_page (state, page) {
      state.page = page;
    },
    change_theme (state) {
      state.is_dark = !state.is_dark;
      useToggle(state.is_dark);
    }
  }
});

export default store;
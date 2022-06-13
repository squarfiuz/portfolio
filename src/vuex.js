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
      notifications: []
    }
  },
  mutations: {
    add_notification(state, { message, type, timeout = 5000 }) {
      state.notifications.push({
        message,
        type,
        timeout
      });
    },
    change_language (state, language) {
      state.language = language;
    },
    change_page (state, page) {
      state.page = page;
    },
    change_theme (state) {
      state.is_dark = !state.is_dark;
      useToggle(state.is_dark);
    },
    remove_notification(state, index) {
      state.notifications.splice(index, 1);
    }
  }
});

export default store;
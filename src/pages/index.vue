<template>
  <Navbar class="nav-bar"></Navbar>
  <main class="page">
    <router-view class="content"></router-view>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useStore } from "vuex";

const store = useStore();

if (!localStorage.language) {
  store.commit("change_language", "en");
  localStorage.language = "en";
} else {
  store.commit("change_language", localStorage.language);
}
</script>

<style lang="scss" scoped>
.page {
  padding-top: var(--header-height);

  .content { height: 100%; }
}
</style>
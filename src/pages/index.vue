<template>
  <Navbar class="nav-bar"></Navbar>
  <main class="page">
    <router-view class="content"></router-view>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style lang="scss" scoped>
.page {
  padding-top: var(--header-height);

  .content { height: 100%; }
}
</style>
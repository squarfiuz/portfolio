<template>
  <div>
    <h1 style="color: #fff">En developpement</h1>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
store.commit("change_page", "contactme");
</script>

<style lang="scss" scoped>

</style>
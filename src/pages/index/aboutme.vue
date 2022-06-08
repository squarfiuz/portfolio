<template>
  <div>
    
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
store.commit("page_change", "aboutme");
</script>

<style lang="scss" scoped>

</style>
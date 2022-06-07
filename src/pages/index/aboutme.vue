<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'index-aboutme',
  data() {
    return {
      loaded: false
    }
  },
  created() {
    this.$store.commit("page_change", "aboutme");
  }
}
</script>

<style lang="scss" scoped>

</style>
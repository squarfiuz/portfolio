<template>
  <div v-if="loaded">
    <nav-bar class="nav-bar"></nav-bar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'index',
  components: {
    'nav-bar': Navbar
  },
  data() {
    return {
      loaded: true
    }
  }
}
</script>
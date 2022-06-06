<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/" class="link">
        <img src="../assets/avatar.png" class="avatar" alt="logo">
        <span class="username">squarfiuz</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/" class="link">Accueil</router-link>
      <router-link to="/aboutme" class="link">A Propos De Moi</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbar_enable: false
    }
  },
  methods: {
    navbar_toggle() {
      this.navbar_enable = !this.navbar_enable;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--navbar-color);
  box-sizing: border-box;
  padding: 0 35px;
  height: 6rem;
  width: 100%;

  .brand {
    .link {
      display: flex;
      align-items: center;
      color: #fff;

      .avatar {
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      .username {
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 25px;

    .link {
      display: flex;
      align-items: center;
      background: linear-gradient(to top, #a395e9 0%, #a395e9 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
      color: #fff;
      margin-left: 1.5rem;
      transition: background-size 0.3s;

      &:hover {
        background-size: 100% 100%;
      }
    }
  }
}
</style>
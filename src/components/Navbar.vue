<template>
  <div>
    <header class="navbar">
      <div class="sidebar-button" @click="sidebar_toggle">
        <font-awesome-icon icon="bars" type="fa" class="icon" />
      </div>
      <router-link to="/" class="navbar-title">squarfiuz</router-link>
      <div class="flex-grow"></div>
      <nav class="nav-links">
        <router-link to="/" :class="`link ${this.$store.state.page === 'home' ? 'active' : ''}`">Accueil</router-link>
        <router-link to="/aboutme" :class="`link ${this.$store.state.page === 'aboutme' ? 'active' : ''}`">A Propos De Moi</router-link>
        <a href="https://github.com/squarfiuz/portfolio" target="_blank" class="link">GitHub <font-awesome-icon icon="arrow-up-right-from-square" type="fa" /></a>
      </nav>
      <div class="change-theme" @click="chang_theme" :aria-label="`Switch to ${this.$store.state.is_dark ? 'light' : 'dark'} theme`">
        <font-awesome-icon v-if="this.$store.state.is_dark" icon="moon" type="fa" />
        <font-awesome-icon v-else icon="sun" type="fa" />
      </div>
    </header>
    <aside :class="`sidebar ${sidebar_enable ? 'open' : ''}`">
      <nav class="nav-links">
        <router-link to="/" :class="`link ${this.$store.state.page === 'home' ? 'active' : ''}`">Acceuil</router-link>
        <router-link to="/aboutme" :class="`link ${this.$store.state.page === 'aboutme' ? 'active' : ''}`">A Propos De Moi</router-link>
        <a href="https://github.com/squarfiuz/portfolio" target="_blank" class="link">GitHub <font-awesome-icon icon="arrow-up-right-from-square" type="fa" /></a>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const sidebar_enable = ref(false);

function chang_theme() {
  store.commit("theme_change");
}

function sidebar_toggle() {
  sidebar_enable.value = !sidebar_enable.value;
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--navbar-color);
  padding: 0 2.5rem;
  height: var(--header-height);
  width: 100%;

  .sidebar-button {
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;

    .icon {
      fill: var(--sidebar-icon-color);
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .flex-grow { flex-grow: 1; }

  .navbar-title {
    color: var(--text-color);
    font-size: 1.3rem;
    font-weight: 600;
  }
}

.sidebar {
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  overflow-y: auto;
  background-color: var(--navbar-color);
  width: 16.4rem;
  transform: translateX(-100%);
  transition: transform 0.25s ease;

  &.open { transform: translateX(0); }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;

    .link { line-height: 46px; }
  }
}

.nav-links {
  display: flex;
  align-items: center;

  .link {
    display: flex;
    align-items: center;
    background: linear-gradient(to top, var(--link-color-over) 0%, var(--link-color-over) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
    color: var(--link-color);
    margin-left: 1.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    transition: background-size 0.3s;

    &:hover, &.active { background-size: 100% 100%; }

    svg {
      fill: #a3a3a3;
      margin-left: 10px;
      height: 20px;
      width: 20px;
    }
  }
}

.change-theme {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-button-color);
  padding: 0.5rem;
  margin-left: 1.5rem;
  border: none;
  border-radius: 25%;

  &:hover { background-color: var(--theme-button-color-hover); }

  svg {
    fill: var(--theme-icon-color);
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media only screen and (max-width: 900px) {
  .navbar {
    .sidebar-button { display: flex; }

    .nav-links { display: none; }
  }
}
</style>
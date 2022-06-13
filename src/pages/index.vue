<template>
  <div class="notifications">
    <div v-for="(notification, index) in notifications" :key="index">
      <Notification :message="notification.message" :type="notification.type" :index="index" />
    </div>
  </div>
  <Navbar class="nav-bar"></Navbar>
  <main class="page">
    <router-view class="content"></router-view>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Notification from "../components/Notification.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

if (!localStorage.language) {
  store.commit("change_language", "en");
  localStorage.language = "en";
} else {
  store.commit("change_language", localStorage.language);
}

const notifications = ref(store.state.notifications);
</script>

<style lang="scss" scoped>
.notifications {
  z-index: var(--z-index-notification);
  position: fixed;
  top: calc(var(--header-height) + 10px);
  right: 15px;
  display: flex;
  flex-direction: column;

  .container { margin-bottom: 20px; }
}

.page {
  padding-top: var(--header-height);

  .content { height: 100%; }
}
</style>
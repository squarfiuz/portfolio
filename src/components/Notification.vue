<template>
  <div class="container" @mouseenter="hover_pause" @mouseleave="hover_play">
    <div :class="`notification ${type}`">
      <div class="notification-icon">
        <font-awesome-icon type="fa" :icon="icons[type]" class="icon" />
      </div>
      <h4 class="message">{{ message }}</h4>
      <div class="close">
        <font-awesome-icon @click.stop="close_notification" type="fa" icon="xmark" class="icon" />
      </div>
      <div class="progress-bar" :style="{ animationDuration: `${timeout}ms`, animationPlayState: is_running ? 'running': 'paused' }"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timeout: {
    type: Number,
    default: 5000
  },
  type: {
    type: String,
    required: true
  }
});

const message = ref(props.message);
const type = ref(props.type);
const timeout = ref(props.timeout);

const is_running = ref(true);

const icons = ref({
  success: 'circle-check',
  error: 'exclamation-triangle'
});

function close_notification() {
  store.commit("remove_notification", props.index);
};

class pausable_timeout {
  constructor(func, milliseconds) {
    this.func = func;
    this.date_ms = new Date().valueOf();
    this.timeout = setTimeout(func, milliseconds);
    this.time_left = milliseconds;
  };

  pause() {
    clearTimeout(this.timeout);
    const elapsed_time = new Date().valueOf() - this.date_ms;
    this.time_left -= elapsed_time;
  };

  unpause() {
    this.timeout = setTimeout(this.func, this.time_left);
    this.date_ms = new Date().valueOf();
  };
};

const timer = new pausable_timeout(() => close_notification(), timeout.value);

function hover_pause() {
  is_running.value = false;
  timer.pause();
};

function hover_play() {
  is_running.value = true;
  timer.unpause();
};
</script>

<style lang="scss" scoped>
.container {
  .notification {
    position: relative;  
    display: flex;
    align-items: center;
    padding: 18px 20px;
    border-radius: 5px;
    height: 60px;
    transition: transform 0.3s ease;

    .notification-icon {
      cursor: pointer;
      margin-right: 10px;
      height: 100%;
      width: 100%;

      .icon {
        fill: #fff;
        height: 100%;
        width: 100%;
      }
    }

    &.success { background-color: #198754; }

    &.error { background-color: #dc3545; }

    .message {
      color: #fff;
      font-size: 1.2rem;
      line-height: 24px;
      white-space: nowrap;
    }

    .close {
      cursor: pointer;
      margin-left: 10px;
      height: 100%;
      width: 100%;

      .icon {
        fill: #fff;
        height: 100%;
        width: 100%;
      }
    }

    .progress-bar {
      z-index: var(--z-index-notification-progress-bar);
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #ffffffb3;
      height: 5px;
      width: 100%;
      transform-origin: left;
      animation: scale-x-frames linear 1 forwards;
    }

    @keyframes scale-x-frames {
      0% {
        transform: scaleX(1);
      }
      100% {
        transform: scaleX(0);
      }
    }
  }
}
</style>
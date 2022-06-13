<template>
  <div>
    <h1 class="title">{{ translation.title }}</h1>
    <div class="contact">
      <form ref="form" class="mail-form" @submit.prevent="send_email">
        <div class="name">
          <label class="label-name">{{ translation.form.name.label }}</label>
          <input type="text" name="name" class="input-name" autoComplete="off" :placeholder="translation.form.name.placeholder">
        </div>
        <div class="email">
          <label class="label-email">{{ translation.form.email.label }}</label>
          <input type="text" name="email" class="input-name" autoComplete="off" :placeholder="translation.form.email.placeholder">
        </div>
        <div class="message">
          <label class="label-message">{{ translation.form.message.label }}</label>
          <textarea name="message" class="textarea-message" rows="7" :placeholder="translation.form.message.placeholder"></textarea>
        </div>
        <button type="submit" :class="`send-button ${submit_is_clickable ? '' : 'disable'}`">{{ translation.form.button.label }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import emailjs from "@emailjs/browser";
import en from "../../assets/translation/en.json";
import fr from "../../assets/translation/fr.json";

const translations = { en, fr };

const store = useStore();
store.commit("change_page", "contactme");

const translation = ref(translations[store.state.language].pages.index.contactme);

const form = ref(null);
const submit_is_clickable = ref(true);

async function send_email() {
  console.log(form.value, form.value.name.value.length);
  if (!form.value.name.value.length) return store.commit("add_notification", { type: "error", message: translation.value.form.name.error_require });
  if (!form.value.email.value.length) return store.commit("add_notification", { type: "error", message: translation.value.form.email.error_require });
  if (!form.value.message.value.length) return store.commit("add_notification", { type: "error", message: translation.value.form.message.error_require });
  if (!form.value.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return store.commit("add_notification", { type: "error", message: translation.value.form.email.error_format });
  if (submit_is_clickable.value) {
    submit_is_clickable.value = false;
    setTimeout(() => submit_is_clickable.value = true, 3000);
    emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, form.value, process.env.VUE_APP_EMAILJS_PUBLIC_KEY).then(() => {
      store.commit("add_notification", { message: "Message sent with success.", type: "success" });
    }).catch(() => {
      store.commit("add_notification", { message: "Error while sending the message, try again.", type: "error" });
    });
  }
};
</script>

<style lang="scss" scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.toast-enter-active {
  transition: all 0.3 ease;
}

.content {
  padding: 7rem 10%;

  .title, .subtitle {
    color: var(--text-color);
  }

  .contact {
    .mail-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin: 1rem 0;

      .name, .email, .message {
        position: relative;

        .label-name, .label-email, .label-message {
          position: absolute;
          top: -0.75rem;
          left: 1.25rem;
          background-color: var(--background-color);
          color: var(--text-color);
          padding: 0.25rem;
        }

        .input-name, .input-mail, .textarea-message {
          resize: none;
          background-color: transparent;
          color: var(--text-color);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 2px solid var(--email-form-border);
          width: 100%;

          &:focus { border-color: var(--email-form-border-focus); }
        }
      }

      .send-button {
        background-color: var(--email-form-button);
        color: var(--text-color);
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        width: 14rem;
        transition: 0.3s;

        &:hover { background-color: var(--email-form-button-hover); }

        &.disable {
          cursor: initial;
          background-color: var(--email-form-button-disable);
        }
      }
    }
  }
}
</style>
<template>
  <div>
    <div class="background"></div>
    <div class="card">
      <div class="top">
        <img src="../../assets/images/avatar.png" alt="avatar" class="avatar">
      </div>
      <div class="bottom">
        <h2 class="username">@squarfiuz</h2>
        <p class="location">{{ translation.location }}</p>
        <p class="description">{{ translation.description }}</p>
      </div>
    </div>
    <div class="links">
      <div class="link">
        <a href="discord:/users/945318973807935558" target="_blank" class="link-button">
          <div class="link-icon">
            <font-awesome-icon icon="discord" type="fab" class="icon" />
          </div>
          <div class="link-text">
            <h2 class="name">{{ translation.links.discord_profile }}</h2>
            <p class="url">discord:/users/945318973807935558</p>
          </div>
          <div class="flex-grow"></div>
          <div class="link-arrow">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </a>
      </div>
      <div class="link">
        <a href="https://discord.gg/SgfzZPckVT" target="_blank" class="link-button">
          <div class="link-icon">
            <font-awesome-icon icon="discord" type="fab" class="icon" />
          </div>
          <div class="link-text">
            <h2 class="name">{{ translation.links.discord_server }}</h2>
            <p class="url">https://discord.gg/devos-code</p>
          </div>
          <div class="flex-grow"></div>
          <div class="link-arrow">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </a>
      </div>
      <div class="link">
        <a href="https://github.com/squarfiuz" target="_blank" class="link-button">
          <div class="link-icon">
            <font-awesome-icon icon="github" type="fab" class="icon" />
          </div>
          <div class="link-text">
            <h2 class="name">GitHub</h2>
            <p class="url">https://github.com/squarfiuz</p>
          </div>
          <div class="flex-grow"></div>
          <div class="link-arrow">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </a>
      </div>
      <div class="link">
        <a href="https://twitter.com/squarfiuz" target="_blank" class="link-button">
          <div class="link-icon">
            <font-awesome-icon icon="twitter" type="fab" class="icon" />
          </div>
          <div class="link-text">
            <h2 class="name">Twitter</h2>
            <p class="url">https://twitter.com/squarfiuz</p>
          </div>
          <div class="flex-grow"></div>
          <div class="link-arrow">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import en from "../../assets/translation/en.json";
import fr from "../../assets/translation/fr.json";

const translations = { en, fr };

const store = useStore();
store.commit("change_page", "home");

const translation = translations[store.state.language].pages.index.index;
</script>

<style lang="scss" scoped>
.content {
  padding: 15rem 10% 0;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-index-background);
    background-image: url("../../assets/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 35rem;
    width: 100%;
  }

  .card {
    background-color: var(--card-color);
    border-radius: 0.8rem;
    margin-right: auto;
    margin-left: auto;
    height: auto;
    width: 90%;
    max-width: 1500px;

    .top {
      display: flex;
      justify-content: center;
      transform: translateY(-30%);

      .avatar {
        border-radius: 50%;
        height: 12rem;
        width: 12rem;
        transition: 0.3s;

        &:hover {
          transform: translateY(-3%);
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      max-width: 1000px;
      transform: translateY(-20%);

      .username {
        color: var(--text-color);
        margin-bottom: 0.25rem;
      }

      .location {
        color: var(--text-description-color);
        margin-bottom: 1.5rem;
      }

      .description {
        color: var(--text-color);
        text-align: center;
        padding: 0 15%;
      }
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    width: 100%;
    max-width: 1000px;

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--card-color);
      border-radius: 0.25rem;
      margin-bottom: 5%;
      width: 49%;
      min-width: 440px;

      .link-button {
        display: flex;
        align-items: center;
        height: 80px;
        width: 100%;

        .link-icon {
          padding: 15px;
          height: 100%;
          width: 100px;

          .icon {
            fill: var(--social-network-icon-color);
            height: 100%;
            width: 100%;
          }
        }

        .link-text {
          overflow: hidden;

          .name { color: var(--text-color); }

          .url { color: var(--text-description-color); }
        }

        .flex-grow { flex-grow: 1; }

        .link-arrow {
          display: flex;
          align-items: center;
          padding-right: 20px;

          .icon {
            fill: var(--arrow-icon-color);
            height: 1.5rem;
            width: 1.5rem;
            transition: 0.3s;
          }
        }

        &:hover {
          .link-arrow {
            .icon { transform: translateX(0.5rem); }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1190px) {
  .content {
    .links {
      .link { width: 100%; }
    }
  }
}

@media only screen and (max-width: 560px) {
  .content {
    .links {
      .link {
        min-width: 100%;

        .link-button {
          .link-icon { width: 70px; }
        }

        .link-text {
          .name { font-size: 1rem; }
          .url { font-size: 0.75rem; }
        }

        .link-arrow {
          .icon {
            height: 0.75rem;
            width: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
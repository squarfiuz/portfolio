<template>
  <div>
    <div class="background"></div>
    <div class="card">
      <div class="info">
        <div class="top">
          <img src="../../assets/images/avatar.png" alt="avatar" class="avatar">
        </div>
        <div class="bottom">
          <h2 class="username">@squarfiuz</h2>
          <p class="location">France, Paris</p>
          <p class="description">Hey, je m'appelle Pierre-Alexis et je suis passionné par le developpement. Je suis développeur web full stack et mes technologies préférées sont Vue.js ainsi qu'Adonis.js. Je m'interesse en ce moment au C++ pour un énorme projet !</p>
        </div>
      </div>
    </div>
    <div class="links">
      <a href="discord:/users/945318973807935558" target="_blank">
        <div class="link">
          <div class="left">
            <font-awesome-icon icon="discord" type="fab" class="icon" />
            <div class="text">
              <h2 class="name">Mon profil Discord</h2>
              <p class="url">discord:/users/945318973807935558</p>
            </div>
          </div>
          <div class="right">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </div>
      </a>
      <a href="https://discord.gg/SgfzZPckVT" target="_blank">
        <div class="link">
          <div class="left">
            <font-awesome-icon icon="discord" type="fab" class="icon" />
            <div class="text">
              <h2 class="name">Mon serveur Discord</h2>
              <p class="url">https://discord.gg/devos-code</p>
            </div>
          </div>
          <div class="right">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </div>
      </a>
      <a href="https://github.com/squarfiuz" target="_blank">
        <div class="link">
          <div class="left">
            <font-awesome-icon icon="github" type="fab" class="icon" />
            <div class="text">
              <h2 class="name">GitHub</h2>
              <p class="url">https://github.com/squarfiuz</p>
            </div>
          </div>
          <div class="right">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </div>
      </a>
      <a href="https://twitter.com/squarfiuz" target="_blank">
        <div class="link">
          <div class="left">
            <font-awesome-icon icon="twitter" type="fab" class="icon" />
            <div class="text">
              <h2 class="name">Twitter</h2>
              <p class="url">https://twitter.com/squarfiuz</p>
            </div>
          </div>
          <div class="right">
            <font-awesome-icon icon="arrow-right" type="fas" class="icon" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
store.commit("page_change", "home");
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
    height: 20rem;
    width: 100%;

    .info {
      transform: translateY(-30%);

      .top {
        display: flex;
        justify-content: center;

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
        padding: 1rem 0;
        height: 100%;

        .username {
          color: var(--text-color);
          margin-bottom: 0.25rem;
        }

        .location {
          color: #a3a3a3;
          margin-bottom: 1.5rem;
        }

        .description {
          color: var(--text-color);
          text-align: center;
          padding: 0 15%;
        }
      }
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 7rem;

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--card-color);
      border-radius: 0.25rem;
      padding: 0 1.5rem;
      margin-bottom: 2.5rem;
      height: 5rem;
      width: 33rem;

      .left {
        display: flex;
        align-items: center;

        .icon {
          fill: #a395e9;
          height: 4rem;
          width: 4rem;
        }

        .text {
          margin-left: 1.5rem;

          .name { color: var(--text-color); }

          .url { color: #a3a3a3; }
        }
      }

      .right {
        display: flex;
        align-items: center;

        .icon {
          fill: #5865f2;
          height: 1.5rem;
          width: 1.5rem;
          transition: 0.3s;
        }
      }

      &:hover {
        .right {
          .icon { transform: translateX(0.5rem); }
        }
      }
    }
  }
}

@media only screen and (max-width: 1336px) {
  .content {
    .links { justify-content: center; }
  }
}

@media only screen and (max-width: 640px) {
  .content {
    .card {
      .info {
        .bottom {
          .description {
            font-size: 14px;
            padding: 0 7%;
          }
        }
      }
    }

    .links {
      .link {
        padding: 0 1.5rem;
        margin-bottom: 2.5rem;
        height: 5rem;
        width: 28rem;

        .left {
          .icon {
            height: 3rem;
            width: 3rem;
          }

          .text {
            margin-left: 1rem;

            .name { font-size: 18px; }

            .url { font-size: 14px; }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .content {
    .card {
      .info {
        .bottom {
          .description {
            font-size: 14px;
            padding: 0 7%;
          }
        }
      }
    }

    .links {
      .link {
        padding: 0 1rem;
        margin-bottom: 2.5rem;
        height: 5rem;
        width: 20rem;

        .left {
          .icon {
            height: 2.5rem;
            width: 2.5rem;
          }

          .text {
            margin-left: 0.75rem;

            .name { font-size: 16px; }

            .url { font-size: 12px; }
          }
        }
      }
    }
  }
}
</style>
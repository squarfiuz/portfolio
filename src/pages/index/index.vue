<template>
  <div>
    <div class="slice"></div>
    <div class="card">
      <div class="info">
        <div class="top">
          <img src="../../assets/avatar.png" alt="avatar" class="avatar">
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
            <img src="../../assets/svg/discord.svg" alt="discord logo" class="logo">
            <div class="text">
              <h2 class="name">Mon profil Discord</h2>
              <p class="url">discord:/users/945318973807935558</p>
            </div>
          </div>
          <div class="right">
            <img src="../../assets/svg/arrow-right.svg" alt="arrow right" class="arrow-right">
          </div>
        </div>
      </a>
      <a href="https://discord.gg/SgfzZPckVT" target="_blank">
        <div class="link">
          <div class="left">
            <img src="../../assets/svg/discord.svg" alt="discord logo" class="logo">
            <div class="text">
              <h2 class="name">Mon serveur Discord</h2>
              <p class="url">https://discord.gg/devos-code</p>
            </div>
          </div>
          <div class="right">
            <img src="../../assets/svg/arrow-right.svg" alt="arrow right" class="arrow-right">
          </div>
        </div>
      </a>
      <a href="https://github.com/squarfiuz" target="_blank">
        <div class="link">
          <div class="left">
            <img src="../../assets/svg/github.svg" alt="github logo" class="logo">
            <div class="text">
              <h2 class="name">GitHub</h2>
              <p class="url">https://github.com/squarfiuz</p>
            </div>
          </div>
          <div class="right">
            <img src="../../assets/svg/arrow-right.svg" alt="arrow right" class="arrow-right">
          </div>
        </div>
      </a>
      <a href="https://twitter.com/squarfiuz" target="_blank">
        <div class="link">
          <div class="left">
            <img src="../../assets/svg/twitter.svg" alt="github logo" class="logo">
            <div class="text">
              <h2 class="name">Twitter</h2>
              <p class="url">https://twitter.com/squarfiuz</p>
            </div>
          </div>
          <div class="right">
            <img src="../../assets/svg/arrow-right.svg" alt="arrow right" class="arrow-right">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 20%;

  .slice {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    height: 35rem;
    width: 130%;
    transform: translate(-40px, -20%) rotate(-5.5deg);
    background-color: #b044ce;
  }

  .card {
    background-color: var(--card-color);
    border-radius: 0.8rem;
    margin-top: 15rem;
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
        padding: 1rem 5rem;
        height: 100%;

        .username {
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .location {
          color: #a3a3a3;
          margin-bottom: 1.5rem;
        }

        .description {
          color: #fff;
          text-align: center;
          padding: 0 10rem;
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
      box-sizing: border-box;
      padding: 0 1.5rem;
      margin-bottom: 2.5rem;
      height: 5rem;
      width: 33rem;

      .left {
        display: flex;

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 4rem;
          width: 4rem;
        }

        .text {
          margin-left: 1.5rem;

          .name {
            color: #fff;
          }

          .url {
            color: #a3a3a3;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

        .arrow-right {
          height: 1.5rem;
          width: 1.5rem;
          transition: 0.3s;
        }
      }

      &:hover {
        .right {
          .arrow-right {
            transform: translateX(0.5rem);
          }
        }
      }
    }
  }
}
</style>
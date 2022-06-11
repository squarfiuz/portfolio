<template>
  <router-view></router-view>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --header-height: 4rem;
  --theme-button-color: transparent;
  --z-index-background: -1;
  --z-index-sidebar: 6;
  --z-index-navbar: 10;
}

html.dark {
  --scrollbar-track: #0b111e;
  --scrollbar-thumb: #151c28;
  --background-color: #0b111e;
  --navbar-color: #151c28;
  --dropdown-color: #131924;
  --card-color: #151c28;
  --link-color: #fff;
  --link-color-over: #a395e9;
  --text-color: #fff;
  --text-description-color: #a3a3a3;
  --theme-icon-color: #fff;
  --theme-button-color-hover: #0b111e;
  --sidebar-icon-color: #fff;
  --social-network-icon-color: #a395e9;
  --arrow-icon-color: #5865f2;
}

html.light {
  --scrollbar-track: #caced6;
  --scrollbar-thumb: #fff;
  --background-color: #caced6;
  --navbar-color: #fff;
  --dropdown-color: #fff;
  --card-color: #fff;
  --link-color: #000;
  --link-color-over: #6f5fdb;
  --text-color: #000;
  --text-description-color: #a3a3a3;
  --theme-icon-color: #a3a3a3;
  --theme-button-color-hover: #d8d8d8;
  --sidebar-icon-color: #000;
  --social-network-icon-color: #6f5fdb;
  --arrow-icon-color: #5865f2;
}

#app {  
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

a {
  text-decoration: none;
}

body {
  overflow-x: hidden;
  background-color: var(--background-color);
  width: 100%;
}

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background: var(--scrollbar-track); }

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--scrollbar-thumb);
}
</style>

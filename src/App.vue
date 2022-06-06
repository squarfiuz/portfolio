<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
}

:root {
  --background-color: #0b111e;
  --navbar-color: #151c28;
  --card-color: #151c28;
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
</style>

<template>
  <div id="app">
    <router-link class="home-link" v-if="$route.name !== 'Home' && $route.name !== 'Soon'" :to="{name: 'Home'}">sr</router-link>
    <router-view class="content" />
  </div>
</template>

<style lang="scss">
html, body {
  padding:0;
  margin:0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.content {
  // text-align:center;
}
.home-link {
  padding:20px;
}
a, a:visited, a:active, a:hover {
  // text-decoration: none;
  color: black;
}
li {
  list-style: none;
}
</style>

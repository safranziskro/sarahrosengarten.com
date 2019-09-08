<template>
  <div class="home">
    <router-link to="/works">Works</router-link>
    <img src="https://i.dailymail.co.uk/1s/2019/01/06/22/8191824-6562989-image-a-71_1546813442153.jpg" />
    <router-link to="/writing"> Writing</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang='scss'>

.home {
  padding: 30px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  height:100vh;
  img {
    max-height: calc(100vh - 65px);
    max-width: calc(100vw - 150px);
  }
  a {
    font-weight: bold;
    color: black;
    margin: 0 5px;
    width: 75px;
    text-align: center;
    &.router-link-exact-active {
      color: grey;
    }
  }
}
</style>
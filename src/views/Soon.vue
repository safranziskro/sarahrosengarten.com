<template>
  <div class="soon">
    <a href="mailto:sarahfrosengarten@gmail.com">
        <img src="https://i.dailymail.co.uk/1s/2019/01/06/22/8191824-6562989-image-a-71_1546813442153.jpg" />
    </a>
  </div>
</template>

<script>
export default {
  name: "soon"
};
</script>

<style lang='scss'>

.soon {
  padding: 30px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  height:100vh;
  img {
    max-height: calc(100vh - 65px);
    max-width: calc(100vw - 150px);
  }
}
</style>
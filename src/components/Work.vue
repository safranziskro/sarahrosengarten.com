<template>
  <div class="work">
    <template v-if="goaway">404</template>
    <template v-else>
      <template v-if="id === 'to-faint-in-a-jar'">
        <img src="https://dummyimage.com/600x400/f00/0f0&text=hello.jpg">
        <br>
        <img src="https://dummyimage.com/600x400/ff0/0ff&text=world.jpg">
      </template>
      <template v-else-if="id === 'helloooooo'">

      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "Work-1",
  data() {
    return {
      works: ['to-faint-in-a-jar']
    }
  },
  props: {
    id: String
  },
  computed: {
    goaway () {
      return this.works.indexOf(this.id) < 0
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

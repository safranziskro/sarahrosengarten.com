<template>
  <div class="works">
      <ul>
        <li>
            <a href="http://nba-gallery.com/sarah-rosengarten-kindamind/">kindamind </a>
        </li>
        <li>
            <router-link :to="'/work/to-faint-in-a-jar'">to faint in a jar, 2018</router-link>
        </li>
        <li>
            <a target="_blank" href="https://google.com">Work Title 2, 2019</a>
        </li>
        <li>
            <br><br>
        </li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
      </ul>

       <ul>
        <li>
            <a href="http://nba-gallery.com/sarah-rosengarten-kindamind/">kindamind </a>
        </li>
        <li>
            <router-link :to="'/work/to-faint-in-a-jar'">to faint in a jar, 2018</router-link>
        </li>
        <li>
            <a target="_blank" href="https://google.com">Work Title 2, 2019</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "works"
};
</script>

<style>
.works {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: calc(100vh - 3em);
    padding:20px;
    line-height:1.4em;
}

@media only screen and (max-width: 980px) {
  .works {
    flex-direction: column;
  }
}
</style>
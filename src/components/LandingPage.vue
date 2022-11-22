<template>
  <SearchFilter />
  <div class="m-24 p-10 shadow-card_default hover:shadow-card_hovered">
    <CharactersList />
    <p>pagination</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SearchFilter from "./SearchFilter.vue";
import CharactersList from "./CharactersList.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    SearchFilter,
    CharactersList,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

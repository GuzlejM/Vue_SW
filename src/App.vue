<template>
  <LandingPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "./components/LandingPage.vue";

export default defineComponent({
  name: "App",
  components: {
    LandingPage,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>

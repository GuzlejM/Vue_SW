<template>
  <LandingPage class="bg-red-700" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "./components/LandingPage/LandingPage.vue";

export default defineComponent({
  name: "App",
  components: {
    LandingPage,
  },
});
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  text-align: center;
}
html,
body {
  height: 100vh;
}
</style>

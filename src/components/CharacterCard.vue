<template lang="">
  <div
    class="mr-10 mt-5 border-4 rounded-md border-yellow-primary w-1/6 p-3 flex flex-col items-center"
  >
    <div class="rounded-full w-4/6 h-4/6 overflow-hidden">
      <img
        :src="`https://starwars-visualguide.com/assets/img/characters/${
          index + 1
        }.jpg`"
        :alt="character.name"
      />
    </div>
    <div>
      <h1>{{ character.name }}</h1>
      <p class="text-yellow-primary">{{ this.planet.name }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string;
  films: string;
}
export default defineComponent({
  name: "CharacterCard",
  props: ["character", "index"],
  data() {
    return {
      planet: {} as Planet,
      loading: true,
    };
  },

  methods: {
    async fetchPlanetName() {
      const swApiResponse = await axios.get(this.character.homeworld);
      this.planet = swApiResponse.data;
      this.loading = false;
      console.log(this.planet.name);
    },
  },
  async mounted() {
    await this.fetchPlanetName();
  },
  setup() {
    // ...
  },
});
</script>
<style lang=""></style>

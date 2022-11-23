<template lang="">
  <div class="flex justify-center font-poppins m-5 border-l-orange-200">
    <div v-if="loading">
      <font-awesome-icon
        icon="fa-solid fa-spinner"
        class="text-yellow-primary"
      />
      <h1>loading characters list...</h1>
    </div>
    <div v-else>
      <CharacterCard
        v-for="(character, index) in data.results"
        :key="index"
        :character="character"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

import CharacterCard from "./CharacterCard.vue";
interface Data {
  count: number;
  next: string;
  previous: string;
  results: People[];
}

interface People {
  img: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

export default defineComponent({
  name: "CharacterList",
  components: { CharacterCard },
  data() {
    return {
      data: {} as Data,
      people: [] as People[],
      // dont forget count number cant be higher thatn 10 and less than 1 (because of number of pages)
      count: 1 as number,
      loading: true as boolean,
    };
  },
  methods: {
    async fetchStarWarsData() {
      const swApiResponse = await axios.get<Data>(
        "https://swapi.dev/api/people/?page=1"
      );
      this.data = swApiResponse.data;
      this.loading = false;
      console.log(this.data.results);
    },
  },
  async mounted() {
    await this.fetchStarWarsData();
  },
});
</script>
<style lang=""></style>

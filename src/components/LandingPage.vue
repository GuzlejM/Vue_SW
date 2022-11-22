<template>
  <p>Search</p>
  <p class="text-3xl font-bold underline">Filter</p>
  <p>List of characters</p>
  <div v-if="loading">
    <i class="fa-solid fa-spinner-third"></i>
    <h1>loading...</h1>
  </div>
  <li v-else v-for="(person, index) in data.results" :key="index">
    {{ person.name }}
  </li>
  <p>pagination</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

import SearchFilter from './SearchFilter.vue';

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
  name: "LandingPage",
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

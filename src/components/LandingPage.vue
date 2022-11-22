<template>
  <p>Search</p>
  <p>Filter</p>
  <p>List</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Data {
  count: number;
  next: string;
  previous: string;
  results: People[];
}

interface People {
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
    };
  },
  methods: {
    async fetchStarWarsData() {
      const swApiResponse = await axios.get<Data>(
        "https://swapi.dev/api/people"
      );
      this.data = swApiResponse.data;
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

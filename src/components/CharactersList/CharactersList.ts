import { defineComponent } from "vue";
import axios from "axios";

import CharacterCard from "../CharacterCard/CharacterCard.vue";
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
    async fetchStarWarsCharacters() {
      const swApiResponse = await axios.get<Data>(
        "https://swapi.dev/api/people/?page=1"
      );
      this.data = swApiResponse.data;
      this.loading = false;
      console.log(this.data.results);
    },
  },
  async mounted() {
    await this.fetchStarWarsCharacters();
  },
});

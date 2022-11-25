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

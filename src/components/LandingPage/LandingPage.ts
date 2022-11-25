import { defineComponent } from "vue";

import SearchFilter from "../SearchFilter/SearchFilter.vue";
import CharactersList from "../CharacterList/CharactersList.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    SearchFilter,
    CharactersList,
  },
});

import { createApp } from "vue";
import App from "./App.vue";

import "./assets/index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

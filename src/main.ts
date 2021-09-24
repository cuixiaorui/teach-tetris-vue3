import { createApp } from "vue";
import App from "./App.vue";
import { initGame } from "./game";



initGame()
createApp(App).mount("#app");

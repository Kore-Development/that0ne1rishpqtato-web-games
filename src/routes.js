import Home from "./components/Home.vue";
import Tetris from "./components/Tetris.vue";
import Agario from "./components/Agario.vue";
import Minecraft from "./components/Minecraft.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tetris", component: Tetris },
  { path: "/agario", component: Agario },
  { path: "/minecraft", component: Minecraft }
];

export default routes;

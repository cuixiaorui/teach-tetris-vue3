<template>
  <div class="game">
    <div class="row" v-for="row in gameRow" :key="row">
      <div v-for="col in gameCol" :key="col">
        <Box :type="map[row - 1][col - 1]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Box from "./Box.vue";
import { gameCol, gameRow, initRivalGame, initSelfGame } from "../game";
import { reactive } from "vue";

// ref -> .value
const map = reactive([]);
const props = defineProps(["type"]);

if (props.type === "self") {
  initSelfGame(map);
} else if (props.type === "rival") {
  initRivalGame(map);
}
</script>

<style>
.row {
  display: flex;
}

.game {
  margin: 0 15px;
}
</style>

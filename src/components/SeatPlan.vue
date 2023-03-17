<script setup>
import { ref } from "vue";
let koltukNo = ref(0);
koltukNo = 1;
</script>

<template>
  <div>
    <div v-for="(index, row) in 10" :key="row" class="row">
      <div v-for="col in 5" :key="col" class="seat">
        <div v-if="col === 3" class="aisle"></div>
        <div v-else class="chair">{{ koltukNo++ }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  max-width: 300px;
}

.seatXXX {
  flex: 1;
  height: 50px;
  width: 50px;
  margin-right: 5px;
  background-color: #aaa;
  border: 1px solid red;
}

.aisle {
  flex: 1;
  height: 50px;
  width: 100px;
  background-color: #ddd;
}

.chair {
  margin-right: 5px;
  margin-left: 5px;
  height: 50px;
  width: 50px;
  background-color: #ddd;
  flex: 1;
  border: 1px solid red;
}
</style>

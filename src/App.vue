<script setup>
import { RouterLink, RouterView } from "vue-router";
console.log("App.vue");
</script>

<template>
  <nav>
    <RouterLink to="/home">Home</RouterLink> |
    <RouterLink to="/users">Users</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>

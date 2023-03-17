<template>
  <div>
    GELEN: {{ $route.params.userId }}
    <h2>Posts by User</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.id }}.) {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();

let posts = ref([]);

onMounted(async () => {
  try {
    console.log("selam");
    const url = `https://jsonplaceholder.typicode.com/users/${route.params.userId}/posts`;
    const response = await axios.get(url);
    posts.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
</script>

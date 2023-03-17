<template>
  <div v-if="users.length > 0">
    <h1>Kayıtlı Kullanıcılar</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a :href="'/users/' + user.id + '/posts'">{{ user.name }}</a> @{{
          user.username
        }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await axios.get(url);
    users.value = response.data;
  } catch (error) {
    console.log(error);
  }
});

/*
# Life Cycle in sequence:
- setup
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
*/
</script>

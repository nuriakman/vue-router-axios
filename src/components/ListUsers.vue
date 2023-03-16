<script setup>
import axios from "axios";
import { ref } from "vue";
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from "vue";

let users = ref([]);

onMounted(() => {
  const url = "https://jsonplaceholder.typicode.com/users";
  axios
    .get(url)
    .then(function (response) {
      // başarılı
      users = response.data;
      console.log("users", users);
    })
    .catch(function (error) {
      // hatayı ele al
      console.log(error);
    })
    .finally(function () {
      // her koşulda çalıştırılır
    });
});

/*
onBeforeMount(() => console.log("onBeforeMount"));
onRenderTracked(() => console.log("onRenderTracked"));
onMounted(() => console.log("onMounted"));

onUpdated(() => console.log("onUpdated"));
onUnmounted(() => console.log("onUnmounted"));
onBeforeUpdate(() => console.log("onBeforeUpdate"));
onBeforeUnmount(() => console.log("onBeforeUnmount"));
onErrorCaptured(() => console.log("onErrorCaptured"));
onRenderTriggered(() => console.log("onRenderTriggered"));
onActivated(() => console.log("onActivated"));
onDeactivated(() => console.log("onDeactivated"));
onServerPrefetch(() => console.log("onServerPrefetch"));
*/
</script>

<template>
  <div>
    <h1>Kayıtlı Kullanıcılar</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="x">{{ user.name }}</a> @{{ user.username }}
      </li>
    </ul>

    <pre>{{ users.length }}</pre>
    <pre>{{ users }}</pre>
  </div>
</template>

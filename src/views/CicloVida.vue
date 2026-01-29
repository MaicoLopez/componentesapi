<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <div>Hola</div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
  },
};
</script>

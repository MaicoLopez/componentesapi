<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <h2>{{ text }}</h2>
  <h3>{{ counter }}</h3>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const text = ref("Hello World");
    const counter = ref(0);

    text.value = "Hello Vue!";

    setInterval(() => {
      counter.value++;
    }, 1500);

    watch(counter, (newValue, oldValue) => {
      console.log(`old: ${oldValue} - new: ${newValue}`);
    });

    return {
      text,
      counter,
    };
  },
};
</script>

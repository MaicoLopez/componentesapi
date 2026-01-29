<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <div>{{ counter }}</div>
  <br />
  <div>{{ obj }}</div>
</template>
<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const obj = reactive({ count: 0 });
    const counter = ref(0);

    setInterval(() => counter.value++, 500);
    setInterval(() => obj.count++, 500);

    return {
      counter,
      obj,
    };
  },
};
</script>

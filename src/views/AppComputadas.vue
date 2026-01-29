<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <div>{{ fullname }}</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("Maico");
    const lastName = ref("Lopez");

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return {
      fullName,
    };
  },
};
</script>

<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <HijoProp first-name="Maico" last-name="Lopez"></HijoProp>
</template>

<script>
import HijoProp from "@/components/HijoProp.vue";

export default {
  name: "App",
  components: {
    HijoProp,
  },
};
</script>

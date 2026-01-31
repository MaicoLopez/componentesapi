<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <HijoContext first-name="Maico" last-name="Lopez"></HijoContext>
</template>

<script>
import HijoContext from "@/components/HijoContext.vue";
import { provide } from "vue";

export default {
  name: "App",
  components: {
    HijoContext,
  },
  setup() {
    provide("username", "MaicoVizer");
  },
};
</script>

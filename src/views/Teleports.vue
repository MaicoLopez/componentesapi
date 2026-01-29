<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <br />
  <div>
    <TransitionModal />
  </div>
</template>
<script>
import TransitionModal from "@/components/TransitionModal.vue";

export default {
  name: "App",
  components: { TransitionModal },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

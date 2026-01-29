<template>
  <router-link to="/">Volver al Home</router-link>
  <br />
  <button @click="show = !show">Menu</button>

  <transition name="fade">
    <AppMenu v-show="show" />
  </transition>
</template>
<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
  name: "App",
  components: { AppMenu },
  data() {
    return {
      show: false,
    };
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>

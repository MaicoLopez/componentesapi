<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>Curso de Vue.js: Componentes y Composition API</h1>

  <ul>
    <li>
      <router-link to="/componente-transition"
        >Componentes Transition</router-link
      >
    </li>
    <li>
      <router-link to="/teleports">Teleports</router-link>
    </li>
    <li><router-link to="/ciclo-vida"> Ciclo de Vida </router-link></li>
    <li>
      <router-link to="/variable-reactiva"> Variables Reactivas </router-link>
    </li>
    <li>
      <router-link to="/watcher"> Watcher </router-link>
    </li>
    <li>
      <router-link to="/computadas"> Computadas </router-link>
    </li>
    <li>
      <router-link to="/app-props"> Props </router-link>
    </li>
    <li>
      <router-link to="/app-provide"> Provide </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "App",
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

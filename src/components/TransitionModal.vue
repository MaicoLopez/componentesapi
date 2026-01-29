<template>
  <div>
    <button @click="toggle">Modal</button>
    <teleport to="body">
      <div v-show="show" class="modal">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nobis amet obcaecati veniam cupiditate accusantium ipsam ea atque eos
          nihil odit omnis quas ducimus reprehenderit, facilis voluptatum cumque
          pariatur necessitatibus.
        </p>
        <button @click="toggle">Cerrar</button>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

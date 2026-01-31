<template>
  <div>{{ fullName }}</div>
  <div>{{ username }}</div>
  <button ref="btn">Click</button>
</template>

<script setup>
import { computed, inject, ref, toRefs, defineProps } from "vue";

const props = defineProps({
  firstName: String,
  lastName: String,
});
const { firstName, lastName } = toRefs(props);

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const username = inject("username");

const btn = ref(null);

console.log(btn.value);
</script>

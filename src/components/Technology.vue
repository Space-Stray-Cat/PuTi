<template>
  <section id="technology">
    <h2>Technology</h2>
    <p>{{ technology }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const technology = ref(`Our technology stack is built around Vue.js and TypeScript. We believe that these tools provide a strong foundation for building advanced AGI robotics solutions.`)

</script>

<style>
section {
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
</style>

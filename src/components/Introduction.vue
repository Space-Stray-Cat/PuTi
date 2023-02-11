<template>
  <section id="introduction">
    <h2>Introduction</h2>
    <p>{{ introduction }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const introduction = ref(`We are a technology organization focused on AGI robotics. Our mission is to create advanced robotics solutions that can improve people's lives.`)
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

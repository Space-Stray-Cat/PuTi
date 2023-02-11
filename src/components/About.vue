<template>
  <section id="about">
    <h2>About</h2>
    <p>{{ about }}</p>
  </section>
</template>

<script setup lang="ts">
const about = `Our organization is dedicated to advancing the field of AGI robotics. We believe that this technology has the potential to change the world for the better, and we are working tirelessly to make that a reality. Our team of experts is at the forefront of this exciting and rapidly growing field, and we are committed to pushing the boundaries of what is possible.`
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

<template>
  <section id="contact">
    <h2>Contact</h2>
    <ul>
      <li>
        <strong>Phone:</strong> {{ phone }}
      </li>
      <li>
        <strong>Email:</strong> {{ email }}
      </li>
      <li>
        <strong>Address:</strong> {{ address }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const phone = '555-555-5555';
const email = 'contact@organization.com';
const address = '123 Main St, Anytown USA 12345';


</script>

<style>
section {
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}
</style>

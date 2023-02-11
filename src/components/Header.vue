<template>
  <header>
    <img src="/vite.svg" alt="Logo" />
    <nav>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#join-us">Join Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

img {
  width: 150px;
  height: auto;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 10px;
}

nav a {
  font-size: 18px;
  color: #3f3f3f;
  text-decoration: none;
}
</style>

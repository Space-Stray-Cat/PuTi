<template>
  <div>
    <Header />
    <Introduction />
    <Technology />
    <Team />
    <About />
    <Contact />
  </div>

</template>

<script setup lang="ts">
import Header from './Header.vue';
import Introduction from './Introduction.vue';
import Technology from './Technology.vue';
import Team from './Team.vue';
import About from './About.vue';
import Contact from './Contact.vue';


// const particles = [];
// const particleCount = 500;

// for (let i = 0; i < particleCount; i++) {
//   const particle = document.createElement("div");
//   particle.classList.add("particle");
//   particle.style.setProperty("--x", (Math.random() * 100 - 50).toString());
//   particle.style.setProperty("--y", (Math.random() * 100 - 50).toString());
//   particle.style.setProperty("--delay", `${Math.random() * 5}s`);
//   particle.style.setProperty("--duration", `${Math.random() * 5 + 5}s`);
//   document.body.appendChild(particle);
//   particles.push(particle);
// }


</script>

<style>
/* body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
} */

/* body {
  font-family: Arial, sans-serif;
  background-color: #2a2a2a;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  padding: 0;
} */

/* .particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

/* .particle {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  height: 20px;
  position: absolute;
  width: 20px;
  animation: move var(--duration) ease-out forwards;
  animation-delay: var(--delay);
  animation-iteration-count: infinite;
} */
/* 
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: rgb(22, 192, 127);
  animation: move 1s ease-in-out infinite, size 0.5s ease-out forwards;
  animation-delay: calc(var(--delay) * 20ms);
  animation-iteration-count: infinite;
}

@keyframes move {
  0% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 2vw), calc(var(--y) * 2vh));
  }

  20% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 1.5vw), calc(var(--y) * 1.5vh));
  }

  40% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 1vw), calc(var(--y) * 1vh));
  }

  60% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 0.5vw), calc(var(--y) * 0.5vh));
  }

  80% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 0.2vw), calc(var(--y) * 0.2vh));
  }

  100% {
    transform: translate(-50%, -50%) translate(calc(var(--x) * 0vw), calc(var(--y) * 0vh));
  }
}

@keyframes size {
  0% {
    width: 2px;
    height: 2px;
    opacity: 0.5;
  }

  100% {
    width: 10px;
    height: 10px;
    opacity: 0;
  }
} */

header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

header img {
  height: 50px;
  margin: 0;
}

header h1 {
  margin: 0;
}

header nav a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}

section {
  padding: 40px;
}

section h2 {
  margin-bottom: 20px;
}

section p {
  font-size: 16px;
  line-height: 1.5;
}

section ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

section li {
  text-align: center;
  width: calc(33.33% - 20px);
}

section li img {
  height: 100px;
  margin-bottom: 20px;
}

section li h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

section li p {
  font-size: 14px;
}

footer {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

footer p {
  margin: 0;
}

footer a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.btn {
  background-color: #333;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  text-transform: uppercase;
}

.btn:hover {
  background-color: #444;
}
</style>

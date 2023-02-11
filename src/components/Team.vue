<template>
  <section id="team">
    <h2>Team</h2>
    <ul>
      <li v-for="member in team" :key="member.id">
        {{ member.name }} - {{ member.title }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">

interface Member {
  id: number;
  name: string;
  title: string;
}

const team = [
  { id: 1, name: 'John Doe', title: 'CTO' },
  { id: 2, name: 'Jane Doe', title: 'Lead Engineer' },
  { id: 3, name: 'Jim Smith', title: 'Senior Engineer' },
] as Member[];
//   export default Vue.extend({
//     name: 'Team',
//     data() {
//       return {
//         team: [
//           { id: 1, name: 'John Doe', title: 'CTO' },
//           { id: 2, name: 'Jane Doe', title: 'Lead Engineer' },
//           { id: 3, name: 'Jim Smith', title: 'Senior Engineer' },
//         ] as Member[],
//       };
//     },
//   });
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
</style>

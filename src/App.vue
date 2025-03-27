<template>
  <!-- <div class="app">
    <h1>Routing Example</h1> -->
    <Navbar />
    <!-- Navigation Tabs -->
    <!-- <nav>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/parenttochild">Parent to Child</RouterLink>
    </nav> -->

    <!-- Router View -->
    <RouterView />
  <!-- </div> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  background-color: #5f8af8;
  border-radius: 5px;
}

nav a:hover {
  background-color: #4a76d4;
}
</style>

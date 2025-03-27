<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Vue Auth</router-link>
        <div>
          <router-link class="btn btn-outline-light me-2" to="/about">About</router-link>
          <router-link v-if="!authStore.isAuthenticated" class="btn btn-primary" to="/login">Login</router-link>
          <button v-if="authStore.isAuthenticated" class="btn btn-danger" @click="handleLogout">Logout</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/store/authStore';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const handleLogout = () => {
    authStore.logout();
    router.push('/login');
  };
  </script>
  
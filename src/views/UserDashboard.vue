<template>
    <div class="container text-center mt-5">
      <h2>Welcome to Dashboard</h2>
      <p>This page is protected.</p>
      <button class="btn btn-danger" @click="handleLogout">Logout</button>
    </div>
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
  
<template>
    <div class="mt-5 px-5">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3 mt-4">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" />
          <small class="text-danger">{{ errors.email }}</small>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password" />
          <small class="text-danger">{{ errors.password }}</small>
        </div>
  
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/authStore';
  import { useToast } from 'vue-toastification';
  import * as yup from 'yup';
  
  const authStore = useAuthStore();
  const toast = useToast();
  
  const email = ref('');
  const password = ref('');
  const errors = ref({});
  
  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });
  
  const handleLogin = async () => {
    try {
      await schema.validate({ email: email.value, password: password.value }, { abortEarly: false });
      authStore.login(email.value, password.value);
    } catch (validationError) {
      errors.value = validationError.inner.reduce((acc, err) => ({ ...acc, [err.path]: err.message }), {});
      toast.error('⚠️ Please fix the errors before submitting!', { timeout: 2500 });  // ❌ Show toast error
    }
  };
  </script>
  
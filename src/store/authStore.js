import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const router = useRouter();
  const toast = useToast();

  const login = (email, password) => {
    const dummyUser = { email: 'test@example.com', password: 'password123' };

    if (email === dummyUser.email && password === dummyUser.password) {
      isAuthenticated.value = true;
      toast.success('✅ Login successful!', { timeout: 2000 });  // ✅ Success Toast
      router.push('/dashboard');
    } else {
      toast.error('❌ Invalid email or password!', { timeout: 3000 });  // ❌ Error Toast
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    toast.info('🔒 Logged out successfully!', { timeout: 2000 }); // ℹ️ Info Toast
    router.push('/login');
  };

  return { isAuthenticated, login, logout };
});

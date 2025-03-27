// import { createRouter, createWebHistory } from "vue-router";
// import CounterView from "../views/CounterView.vue";
// import ParentToChildView from "../views/ParentToChildView.vue";
// import Todo from "@/components/Todo/TodoList.vue";


// const routes = [
//   { path: "/", redirect: "/counter" },
//   { path: "/counter", component: CounterView },
//   { path: "/parenttochild", component: ParentToChildView },
//   { path: "/todo", component: Todo}
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;



import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UserDashboard from '../views/UserDashboard.vue';
import LoginView from '../views/LoginView.vue';
import { useAuthStore } from '../store/authStore';

const requireAuth = (to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    next('/login');  // Redirect to login if not authenticated
  } else {
    next();
  }
};

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: UserDashboard, beforeEnter: requireAuth }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

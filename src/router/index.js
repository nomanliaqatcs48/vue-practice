import { createRouter, createWebHistory } from "vue-router";
import CounterView from "../views/CounterView.vue";
import ParentToChildView from "../views/ParentToChildView.vue";
import Todo from "@/components/Todo/TodoList.vue";


const routes = [
  { path: "/", redirect: "/counter" },
  { path: "/counter", component: CounterView },
  { path: "/parenttochild", component: ParentToChildView },
  { path: "/todo", component: Todo}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

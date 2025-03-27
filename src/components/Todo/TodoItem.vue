<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" v-model="task.completed" @change="toggleTask" class="me-2">
        <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.text }}</span>
      </div>
      <button class="btn btn-danger btn-sm" @click="deleteTask">X</button>
    </li>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['task']);
  const emit = defineEmits(['toggle-task', 'delete-task']);
  
  const toggleTask = () => emit('toggle-task');
  const deleteTask = () => emit('delete-task');
  </script>
  
  <style scoped>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
  </style>
  
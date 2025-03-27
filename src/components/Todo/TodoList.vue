<template>
    <div class="container mt-4">
      <div class="card p-4 shadow">
        <h2 class="mb-3">To-Do App</h2>
  
        <div class="input-group mb-3">
          <input v-model="newTask" type="text" class="form-control" placeholder="Enter new task" @keyup.enter="addTask">
          <button class="btn btn-primary" @click="addTask">Add</button>
        </div>
  
        <ul class="list-group">
          <TodoItem 
            v-for="(task, index) in tasks" 
            :key="index" 
            :task="task" 
            @toggle-task="toggleTask(index)"
            @delete-task="deleteTask(index)"
          />
        </ul>
  
        <p class="mt-3">Completed Tasks: {{ completedTasks.length }} / {{ tasks.length }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import TodoItem from './TodoItem.vue';
  
  const newTask = ref('');
  const tasks = ref([
    // { text: 'Learn Vue 3', completed: false },
    // { text: 'Practice Composition API', completed: false }
  ]);
  
  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push({ text: newTask.value, completed: false });
      newTask.value = '';
    }
  };
  
  const toggleTask = (index) => {
    debugger;
    tasks.value[index].completed = tasks.value[index].completed;
  };
  
  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };
  
  // Computed property to count completed tasks
  const completedTasks = computed(() => tasks.value.filter(task => task.completed));
  
  // Watcher to log task status
  watch(tasks, () => {
    console.log('Task list updated:', tasks.value);
  }, { deep: true });
  
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: auto;
  }
  </style>
  
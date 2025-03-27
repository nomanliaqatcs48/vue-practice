<template>
  <div class="container mt-4">
    <div class="card shadow p-4 text-center">
      <h2 class="mb-3">Counter</h2>
      <h3 class="fw-bold">{{ count }}</h3>

      <div class="mt-3">
        <button class="btn btn-danger me-2" @click="count--">-</button>
        <button class="btn btn-success" @click="count++">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, watchEffect } from "vue";

// Reactive state
const count = ref(0); // Primitive reactivity
const user = reactive({ name: 'John', age: 30 }); // Object reactivity

// Runs only when a watched value changes
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});


// Runs immediately and tracks dependencies automatically
watchEffect(() => {
  console.log(`Current count: ${count.value}`);
});

</script>

<style scoped>
.card {
  max-width: 300px;
  margin: auto;
}
</style>

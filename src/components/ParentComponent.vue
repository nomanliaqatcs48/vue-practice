<template>
  <div class="container mt-4">
    <div class="card shadow p-4">
      <h2 class="mb-3">Parent Component</h2>
      <p><strong>Message from Parent:</strong> "{{ parentMessage }}"</p>

      <!-- Child Component -->
      <ChildComponent
        :message="parentMessage"
        @update-message="updateMessage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

// Reactive parent data
const parentMessage = ref("Hello from Parent");

// Method to update message
const updateMessage = (newMessage) => {
  parentMessage.value = newMessage;
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: auto;
}
</style>

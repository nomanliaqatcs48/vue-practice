<template>
  <div class="alert alert-info">
    <h4 class="mb-2">Child Component</h4>
    <p>Received Message: "{{ message }}"</p>

    <!-- Emit event to update parent -->
    <button class="btn btn-primary mt-2" @click="sendMessage">
      Update Parent
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props from parent
const props = defineProps(["message"]);

// Define event emitter
const emit = defineEmits(["update-message"]);

// Method to send new message to parent
const sendMessage = () => {
  emit("update-message", "Message updated from Child!");
};
</script>

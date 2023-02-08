<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["userReset"]);
const onReset = () => {
  emit("userReset");
};
</script>
<template>
  <button @click="onReset">Reset</button>
</template>

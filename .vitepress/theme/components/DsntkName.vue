<script setup>
import {ref} from 'vue'
// change the global product name here
const dsntkName = ref('Decision Toolkit')
</script>

<template>
<span class="dsntk-name">{{dsntkName}}</span>
</template>

<style scoped>
.dsntk-name {
  color: var(--dt-name-color);
  background-color: var(--dt-name-background-color);
  font-weight: bold;
  word-spacing: -0.13rem;
}
</style>

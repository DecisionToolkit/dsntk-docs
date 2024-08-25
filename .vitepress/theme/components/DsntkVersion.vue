<script setup>
import {ref} from 'vue'
// change the release version here
const dsntkVersion = ref('0.0.5')
</script>

<template>
<span class="dsntk-version">{{dsntkVersion}}</span>
</template>

<style scoped>
.dsntk-version {
  font-weight: bold;
}
</style>

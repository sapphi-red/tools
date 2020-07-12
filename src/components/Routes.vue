<template>
  <div>
    <router-link :to="{ name: 'index' }">Index</router-link>
    <span>|</span>
    <router-link :to="{ name: 'jsonFormatter' }">JSON Formatter</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Routes'
})
</script>

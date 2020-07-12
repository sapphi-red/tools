<template>
  <routes />
  <h1>Tools</h1>
  <div>Built on vite.</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Routes from '/@/components/Routes.vue'
export default defineComponent({
  name: 'Index',
  components: {
    Routes
  }
})
</script>

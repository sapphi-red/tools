<template>
  <routes />
  <h1>Tools</h1>
  <div>Built on vite.</div>
  <hr />
  <textarea v-model="text" :class="$style.input" />
  <div>Character count: {{ count }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import Routes from '/@/components/Routes.vue'
import { usePreventUnload } from '/@/composables/usePreventUnload'

const text = ref('')
const count = computed(() => Array.from(text.value).length)

usePreventUnload(text)
</script>

<style lang="scss" module>
.input {
  width: calc(100% - 2rem);
  height: 30vh;
  margin: 1rem;
}
</style>

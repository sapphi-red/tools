<template>
  <routes />
  <h1>JSON Formatter</h1>
  <div :class="$style.container">
    <textarea v-model="text" :class="$style.item" />
    <div :class="$style.item">
      {{ formatted }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import Routes from '/@/components/Routes.vue'
import { ref, computed } from 'vue'

const text = ref('')

const formatted = computed(() => {
  try {
    return JSON.stringify(JSON.parse(text.value), undefined, 2)
  } catch (e) {
    return e
  }
})
</script>

<style module>
.container {
  display: flex;
  width: 100%;
}
.item {
  width: 50%;
  min-height: 50vh;
  margin: 1rem;
  white-space: pre;
  text-align: left;
  overflow: auto;
}
</style>

<template>
  <routes />
  <h1>Time</h1>
  <p>Unix time to string</p>
  <input v-model="text" type="number" :class="$style.input" />
  <div>{{ date }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import Routes from '/@/components/Routes.vue'

const text = ref('')
const date = computed(() => {
  try {
    const textNum = parseInt(text.value)
    if (Number.isNaN(textNum)) return 'NaN'

    const date = new Date(textNum * 1000)
    return date.toLocaleString()
  } catch (e) {
    return e
  }
})
</script>

<style lang="scss" module>
.input {
  margin: 1rem;
}
</style>

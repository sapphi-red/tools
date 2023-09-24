<template>
  <routes />
  <h1>Format Text</h1>
  <div :class="$style.container">
    <textarea v-model="text" :class="$style.item" />
    <div :class="$style.item">
      {{ formatted }}
    </div>
  </div>
  <button @click="copy">Copy</button>
  <div v-if="copyMessage !== ''">{{ copyMessage }}</div>
</template>

<script lang="ts" setup>
import Routes from '/@/components/Routes.vue'
import { refAutoReset } from '@vueuse/core'
import { ref, computed } from 'vue'

const text = ref('')

const formatted = computed(() =>
  text.value.split('\n').join(' ').split('. ').join('.\n\n')
)

const copyMessage = refAutoReset('', 1000)
const copy = async () => {
  await navigator.clipboard.writeText(formatted.value)
  copyMessage.value = 'copied'
}
</script>

<style lang="scss" module>
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

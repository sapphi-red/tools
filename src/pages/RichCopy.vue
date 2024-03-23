<template>
  <routes />
  <h1>Rich Copy</h1>
  <div :class="$style.container">
    <textarea v-model="text" :class="$style.input" />
  </div>
  <button @click="copy">Copy</button>
  <div v-if="copyMessage !== ''">{{ copyMessage }}</div>
</template>

<script lang="ts" setup>
import Routes from '/@/components/Routes.vue'
import { refAutoReset } from '@vueuse/core'
import { ref } from 'vue'
import { convert } from 'html-to-text'

const text = ref('')

const copyMessage = refAutoReset('', 1000)
const copy = async () => {
  const v = text.value
  const blobRich = new Blob([v], { type: 'text/html' })
  const blobPlain = new Blob([convert(v)], { type: 'text/plain' })

  await navigator.clipboard.write([
    new ClipboardItem({ ['text/html']: blobRich, ['text/plain']: blobPlain })
  ])
  copyMessage.value = 'copied'
}
</script>

<style module>
.container {
  display: flex;
  width: 100%;
}

.input {
  width: 100%;
  min-height: 10rem;
}
</style>

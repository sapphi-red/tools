<template>
  <routes />
  <h1>Encode</h1>
  <input v-model="text" type="text" :class="$style.input" />
  <hr />
  <div>To Base64 (btoa): {{ toBase64 }}</div>
  <div>
    From Base64 (atob):
    <span :class="fromBase64 === null ? $style.error : ''">{{
      fromBase64 ?? 'error'
    }}</span>
  </div>
  <div>To Base64 (Unicode safe): {{ toBase64Unicode }}</div>
  <div>
    From Base64 (Unicode safe):
    <span :class="fromBase64Unicode === null ? $style.error : ''">{{
      fromBase64Unicode ?? 'error'
    }}</span>
  </div>
  <hr />
  <div>encodeURI: {{ toURI }}</div>
  <div>decodeURI: {{ fromURI }}</div>
  <div>encodeURIComponent: {{ toURIComponent }}</div>
  <div>decodeURIComponent: {{ fromURIComponent }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { toBase64 as _toBase64, fromBase64 as _fromBase64 } from 'js-base64'
import Routes from '/@/components/Routes.vue'

const text = ref('')
const toBase64 = computed(() => btoa(text.value))
const fromBase64 = computed(() => {
  try {
    return atob(text.value)
  } catch {
    return null
  }
})
const toBase64Unicode = computed(() => _toBase64(text.value))
const fromBase64Unicode = computed(() => {
  try {
    return _fromBase64(text.value)
  } catch {
    return null
  }
})

const toURI = computed(() => encodeURI(text.value))
const fromURI = computed(() => decodeURI(text.value))
const toURIComponent = computed(() => encodeURIComponent(text.value))
const fromURIComponent = computed(() => decodeURIComponent(text.value))
</script>

<style lang="scss" module>
.input {
  margin: 1rem;
}
.error {
  color: red;
}
</style>

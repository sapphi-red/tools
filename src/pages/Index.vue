<template>
  <routes />
  <h1>Tools</h1>
  <div>Built on vite.</div>
  <hr />
  <textarea v-model="text" :class="$style.input" />
  <div>Character count: {{ count }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Routes from '/@/components/Routes.vue'
export default defineComponent({
  name: 'Index',
  components: {
    Routes
  },
  setup() {
    const text = ref('')
    const count = computed(() => Array.from(text.value).length)

    return { text, count }
  }
})
</script>

<style lang="scss" module>
.input {
  width: 100%;
  height: 30vh;
  margin: 1rem;
}
</style>

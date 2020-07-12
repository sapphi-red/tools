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

<script lang="ts">
import Routes from '/@/components/Routes.vue'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'JsonFormatter',
  components: {
    Routes
  },
  setup() {
    const text = ref()

    const formatted = computed(() => {
      try {
        return JSON.stringify(JSON.parse(text.value), undefined, 2)
      } catch (e) {
        return e
      }
    })

    return { text, formatted }
  }
})
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
}
</style>

import { Ref } from 'vue'
import { useEventListener } from '@vueuse/core'

export const usePreventUnload = (text: Ref<string>): void => {
  useEventListener('beforeunload', e => {
    if (text.value.length <= 0) return

    e.preventDefault()
    e.returnValue = ''
  })
}

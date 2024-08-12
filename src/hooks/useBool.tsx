import { ref } from "vue"

export const useBool = (initiaValue: boolean) => {
  const bool = ref(initiaValue)
  return {
    ref: bool,
    toggle: () => bool.value = !bool.value,
    on: () => bool.value = true,
    off: () => bool.value = false,
  }
}
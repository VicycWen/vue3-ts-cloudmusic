import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useApiAvailable = defineStore('counter', () => {
  const available = ref(false);
  function setApiAvailable(value: boolean) {
    available.value = value;
  }

  return {
    available,
    setApiAvailable
  }
})

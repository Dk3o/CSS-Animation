import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useSidenavStore = defineStore('sidenav', () => {
  const animationIndex = ref(null)
  const isActive = ref(false)

  const selectedAnimationIndex = (index) => {
    animationIndex.value = index
  }

  return { isActive, selectedAnimationIndex }
})

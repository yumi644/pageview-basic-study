// Pinia Store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    
    const doubleCount = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    async function incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      increment()
    }
    
    return { count, doubleCount, increment, incrementAsync }
  })
  
  // 组件中使用
//   const counterStore = useCounterStore()
//   counterStore.increment()
//   counterStore.incrementAsync()
//   counterStore.doubleCount
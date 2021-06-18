import { ref } from 'vue'

/* 选项框 */
export function optionModel () {
  
  const optionShow = ref(false)

  const toggleOption = () => {
    optionShow.value = !optionShow.value
  }

  return {
    optionShow,
    toggleOption
  }
}
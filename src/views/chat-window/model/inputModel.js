import { computed } from 'vue'


// 输入框发送消息
export function inputModel (props, context) {
  const message = computed({
    get () {
      return props.modelValue
    },
    set (val) {
      context.emit('update:modelValue', val)
    }
  })

  const sendMessage = () => {
    context.emit('send')
  }


  return {
    message,
    sendMessage
  }
}
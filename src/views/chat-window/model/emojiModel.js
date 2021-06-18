import { ref } from 'vue'
import data from "emoji-mart-vue-fast/data/all.json"
import { EmojiIndex } from "emoji-mart-vue-fast/src"

/* 选项框 */
export function emojiModel (input) {

  const emojiShow = ref(false)


  const togglEmmoji = () => {
    emojiShow.value = !emojiShow.value
  }

  /* 接收子组件传来的表情插入输入框中 */
  const selectOnEmoji = (data) => {
    input.value += data
  }

  return {
    emojiShow,
    togglEmmoji,
    selectOnEmoji
  }
}

let emojiIndexs = new EmojiIndex(data)
/* 子组件选择表情触发 */
export function selectEmitEmoji (props, context) {
  const emojiIndex = ref(emojiIndexs)

  const selectEmoji = (emoji) => {
    context.emit('selectEmoji', emoji.native)
  }

  return {
    emojiIndex,
    selectEmoji
  }
}
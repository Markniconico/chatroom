<template>
  <van-popup v-model:show="show" position="bottom" :overlay="false" safe-area-inset-bottom :lock-scroll="false">
    <div class="row">
      <Picker :data="emojiIndex" :style="{ width:'100%',height:'178px' }" set="twitter" @select="selectEmoji" :showSearch="false" :showSkinTones="false" :showPreview="false" />
    </div>
  </van-popup>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'
import { Picker } from "emoji-mart-vue-fast/src"
import "emoji-mart-vue-fast/css/emoji-mart.css"
import { selectEmitEmoji } from './model/emojiModel.js'

export default defineComponent({
  name: 'OptionPopup',
  components: {
    Picker
  },
  props: {
    emojiShow: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    

    // 显示与隐藏
    const show = ref(false)
    watch(() => props.emojiShow, () => {
      show.value = props.emojiShow
    })


    const {
      emojiIndex,
      selectEmoji } = selectEmitEmoji(props, context)


    return {
      show,
      emojiIndex,
      selectEmoji
    }
  }
})
</script>

<style lang='postcss' scoped>
</style>

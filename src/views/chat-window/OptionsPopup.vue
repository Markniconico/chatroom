<template>
  <van-popup v-model:show="show" position="bottom" :overlay="false" safe-area-inset-bottom :lock-scroll="false">
    <van-grid direction="horizontal" :column-num="4" :gutter="20" :icon-size="20" :border="false">
      <van-grid-item icon="photo-o" text="照片" />
        <!--  <van-uploader upload-text="123" capture="camera">
          <van-grid-item style="padding:0;" icon="photo-o" text="拍摄" />
        </van-uploader> -->

        <van-grid-item icon="photo-o" text="拍摄" />
        <van-grid-item icon="photo-o" text="视频通话" />
        <van-grid-item icon="photo-o" text="位置" />
        <van-grid-item icon="photo-o" text="红包" />
        <van-grid-item icon="photo-o" text="转账" />
        <van-grid-item icon="photo-o" text="我的收藏" />
        <van-grid-item icon="photo-o" text="语音输入" />
    </van-grid>
  </van-popup>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'
export default defineComponent({
  name: 'OptionPopup',
  props: {
    optionShow: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {

    // 显示与隐藏
    const show = ref(false)
    watch(() => props.optionShow, () => {
      show.value = props.optionShow
    })

    return {
      show
    }
  }
})
</script>

<style lang='scss' scoped>
</style>

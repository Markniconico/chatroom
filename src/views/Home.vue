<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/message" icon="more" badge="20">消息</van-tabbar-item>
      <van-tabbar-item to="/friend" icon="friends" dot>好友</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>

<style lang='scss'>
</style>

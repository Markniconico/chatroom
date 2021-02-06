<template>
  <div class="home">
    <nav-bar v-if="$route.meta.navBar" />
    <router-view :class="{'main':$route.meta.navBar}" />
    <van-tabbar route>
      <van-tabbar-item to="/chat" icon="more" badge="20">聊天</van-tabbar-item>
      <van-tabbar-item to="/friend" icon="friends" dot>好友</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from '@c/NavBar.vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar
  }
})
</script>

<style lang='scss'>
.home .main {
  padding-top: 46px;
}
</style>

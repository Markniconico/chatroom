<template>
  <div class="home">
    <!-- 头部 -->
    <nav-bar v-if="$route.meta.navBar" />
    <!-- 中心区域 -->
    <router-view :class="{ main: $route.meta.navBar }" />
    <!-- 底部 -->
    <van-tabbar route>
      <van-tabbar-item to="/chat" icon="more" badge="20">聊天</van-tabbar-item>
      <van-tabbar-item to="/friend" icon="friends" dot>好友</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@c/NavBar.vue";
export default defineComponent({
  name: "Home",
  components: {
    NavBar,
  },
  setup() {
    console.log("home");
  },
});
</script>

<style lang="postcss">
.home .main {
  padding-top: 46px;
}
</style>

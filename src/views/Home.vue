<template>
  <div class="home">
    <!-- 头部 -->
    <nav-bar />
    <!-- 中心区域 -->
    <main class="main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <router-view></router-view> -->
    </main>
    <!-- 底部 -->
    <van-tabbar route :fixed="false">
      <van-tabbar-item to="/chat" icon="more">聊天</van-tabbar-item>
      <van-tabbar-item to="/friend" icon="friends">好友</van-tabbar-item>
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
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  & .nav-bar {
  }
  & .main {
    flex: 1;
    overflow: auto;
  }
}
</style>

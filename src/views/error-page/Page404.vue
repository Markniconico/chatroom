<template>
  <van-empty class="no-page" image="search" description="找不到你想去的页面">
    <router-link to="/chat">
      <van-button round type="danger" class="bottom-button"
        >返回主页</van-button
      >
    </router-link>
  </van-empty>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Page404",
});
</script>

<style lang="postcss">
.no-page {
  height: 100vh;
  & .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>

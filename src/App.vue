<template>
  <div class="app">
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback> Loading.... </template>
    </Suspense>
  </div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance } from "vue";

import io from "socket.io-client";
import cookie from "cookie_js";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      // namespace
      const socket = io("/test", {
        path: "/socket.io", // 后端socket地址
        extraHeaders: {
          Authorization: `Bearer ${cookie.get("Admin-Token")}`,
          // "x-csrf-token": cookie.get("csrfToken"),
        },
      });

      socket.on("connect", () => {
        console.log("socket connect success");
      });
      socket.emit("hi");
      socket.on("ha", (payload) => {
        console.log(payload);
      });
    });
  },
});
</script>

<style lang="postcss" scoped>
/* test css */
/* @import "~@styles/global.css";
div {
    background: var(--t-color);
} */
.app {
  width: 100%;
  height: 100%;
}
</style>

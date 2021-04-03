<template>
  <div>
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

export default defineComponent({
  name: "App",
  setup() {
    const socket = getCurrentInstance().ctx.socket;

    socket.io.on("init", () => {
      console.log("socket connect from main.js");
      console.log("socket connect from main.js");
      store.commit("socket_newIsSuccessConnect", true);
    });

    onMounted(() => {
      socket.io.on("connect", () => {
        console.log("socket connect from main.js");
        console.log("socket connect from main.js");
        store.commit("socket_newIsSuccessConnect", true);
      });
    });
  },
});
</script>

<style lang='scss'>
@import "~@styles/reset.scss";
body {
  background: $bg-color;
}
</style>

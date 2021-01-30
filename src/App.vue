<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style lang='scss'>
@import "~@styles/reset.scss";
body {
  background: #eee;
}
</style>

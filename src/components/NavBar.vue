<template>
  <van-nav-bar :title="title" right-text="按钮" fixed>
    <template #right>
      <van-icon name="search" color="#000" size=".5rem" />
      <van-icon name="add-o" color="#000" size=".5rem" />
    </template>
  </van-nav-bar>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'NavBar',
  setup () {
    const route = useRoute()
    const title = computed(() => {
      return route.meta.title
    })
    return {
      title
    }
  }
})
</script>

<style lang='scss'>
.van-nav-bar {
  background-color: $navbar-color;
  .van-nav-bar__title,
  .van-icon {
    color: #000;
  }
}
</style>

<template>
  <van-nav-bar :title="title" left-text="返回" right-text="按钮" fixed placeholder>
    <template #left>
      头像
    </template>
    <template #right>
      <van-icon name="search" color="#fff" size=".5rem" />
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
  background-color: #01bef1;
  .van-nav-bar__title ,.van-icon{
    color: #fff;
  }
}
</style>

<template>
  <div>
    <van-button type="primary" block>块级元素</van-button>
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { test } from '@/api/test.js'
export default defineComponent({
  name: 'App',
  setup () {
    onMounted(()=>{
      test('test').then(res=>{
        console.log(res)
      })
    })
  }
})
</script>

<style lang='scss'>
.van-button {
  width: 375px;
}
</style>

<template>
  <div class="chat-window">
    <!-- 头部 -->
    <header>
      <van-nav-bar title="标题" right-text="按钮" left-arrow fixed placeholder>
        <template #right>
          <van-icon name="friends-o" color="#fff" size=".5rem" />
        </template>
      </van-nav-bar>
    </header>
    <!-- 聊天区域 -->
    <main class="window">
    </main>
    <!-- 输出框区域 -->
    <footer class="input">
      <van-field v-model="message" rows="1" autosize type="textarea" left-icon="volume-o" placeholder="请输入留言">
        <template #right-icon>
          <van-icon name="smile-o" size=".5rem" />
          <van-icon name="add-o" size=".5rem" />
        </template>
        <template #button>
          <van-button type="primary">发送</van-button>
        </template>
      </van-field>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ChatWindow',
  setup () {
    const message = ref('')
    return {
      message
    }
  }
})
</script>

<style lang='scss'>
.chat-window {
  .input {
    position: fixed;
    bottom: 10px;
    width: 100%;
    .van-cell {
      align-items: center;
    }
  }
}
</style>

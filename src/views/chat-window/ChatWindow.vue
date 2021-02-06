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
    <main class="window van-hairline--bottom">
      <div class="info left" v-for="i of 11" :key="i">
        <div class="profile">
          <van-image width="1rem" height="1rem" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="user">
          <div class="name">
            张三
          </div>
          <div class="message bubble-left">
            今天吃什么
          </div>
        </div>
      </div>
      <div class="info right" v-for="i of 5" :key="i">
        <div class="user">
          <div class="name">
            张三
          </div>
          <div class="message bubble-right">
            今天吃什么
          </div>
        </div>
        <div class="profile">
          <van-image width="1rem" height="1rem" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
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
@import "~@styles/mixin.scss";
$bubble-margin: 5px;
$bubble-lr: -10px;
.chat-window {
  .input {
    position: fixed;
    bottom: 0;
    width: 100%;
    .van-cell {
      align-items: center;
    }
  }
  .window {
    display: flex;
    flex-direction: column-reverse;
    height: calc(100vh - 116px);
    padding: 0 10px 5px;
    overflow: auto;
    overscroll-behavior: contain;
    .right {
      align-self: flex-end;
      .name {
        text-align: right;
        padding-right: 5px;
      }
    }
    .left {
      .user {
        transform: translateX(3px);
        .name {
          padding-left: 5px;
          text-align: left;
        }
      }
    }
    .info {
      display: flex;
      align-items: center;
      padding: 5px 0;
      .user {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-right: 3px;
        .name {
          color: #999;
          font-size: 10px;
        }

        .message {
          position: relative;
          padding: 5px;
          font-size: 12px;
          background-color: #fff;
          border-radius: 2px;
        }
        .bubble-left {
          @include bubble;
          transform: translateX($bubble-margin);
          &::after {
            left: $bubble-lr;
            border-right-color: #fff;
          }
        }
        .bubble-right {
          @include bubble;
          transform: translateX(-$bubble-margin);
          &::after {
            right: $bubble-lr;
            border-left-color: #fff;
          }
        }
      }
    }
    .profile {
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>
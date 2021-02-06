<template>
  <div class="info">
    <div class="profile">
      <van-image width="1rem" height="1rem" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="user">
      <div class="name">
        张三
      </div>
      <div class="message" :class="`bubble-${$attrs.class}`">
        今天吃什么
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
})
</script>

<style lang='scss' scoped>
@import "~@styles/mixin.scss";
$bubble-margin: 5px;
$bubble-lr: -10px;

.info.right {
  align-self: flex-end;
  .user {
    order: -1;
    .name {
      text-align: right;
      padding-right: 5px;
    }
  }
}

.info.left {
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
  padding: 2px 0;
  .profile {
    display: flex;
    align-items: flex-end;
  }
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
</style>

<template>
  <div class="info" :class="bubbleClass(item.author)" v-for="item of messageList" :key="item.id">
    <div class="profile">
      <van-image width="1rem" height="1rem" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="user">
      <div class="name">
        {{item.author}}
      </div>
      <div class="message" :class="'bubble-'+bubbleClass(item.author)">
        {{item.msg}}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MessageBlock',
  props: {
    messageList: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const bubbleClass = (author) => author ? 'left' : 'right'
    return {
      bubbleClass
    }
  }
})
</script>

<style lang='scss' scoped>
@import "~@styles/mixin.scss";
$bubble-margin: 5px;
$bubble-lr: -10px;
$bubble-left-bg: #fff;
$bubble-right-bg: #9eea6a;

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
      background-color: $bubble-left-bg;
      &::after {
        left: $bubble-lr;
        border-right-color: $bubble-left-bg;
      }
    }
    .bubble-right {
      @include bubble;
      background-color: $bubble-right-bg;
      transform: translateX(-$bubble-margin);
      &::after {
        right: $bubble-lr;
        border-left-color: $bubble-right-bg;
      }
    }
  }
}
</style>

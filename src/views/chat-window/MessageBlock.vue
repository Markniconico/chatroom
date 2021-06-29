<template>
  <div class="message-block">
    <div class="message-item" v-for="item of messageList" :key="item.id">
      <div class="profile">
        <van-image
          width="1rem"
          height="1rem"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="user">
        <span class="name">
          {{ item.user }}
        </span>
        <span class="message">
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MessageBlock",
  props: {
    messageList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const bubbleClass = (author) => {
      // todo 获取当前用户信息，
      return "left";
    };
    return {
      bubbleClass,
    };
  },
});
</script>

<style lang="postcss" scoped>
/* --bubble-margin: 5px;
--bubble-lr: -10px;
--bubble-left-bg: #fff;
--bubble-right-bg: #9eea6a; */

.message-block.right {
  align-self: flex-end;
  & .user {
    order: -1;
    & .name {
      text-align: right;
      padding-right: 5px;
    }
  }
}

.message-block.left {
  & .user {
    transform: translateX(3px);
    & .name {
      padding-left: 5px;
      text-align: left;
    }
  }
}

.message-block {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  height: 100%;
  overflow-y: auto;
  & .message-item {
    height: 46px;
    display: flex;
    & .profile {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: flex-end;
      margin-top: 6px;
      border-radius: 50%;
      overflow: hidden;
    }
    & .user {
      display: flex;
      flex-direction: column;
      padding: 6px;
      & .name {
        color: #999;
        font-size: 10px;
      }

      & .message {
        padding: 5px;
        font-size: 12px;
        background-color: #fff;
        border-radius: 2px;
        word-break: break-all;
      }
    }
  }
}
</style>

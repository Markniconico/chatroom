<template>
  <div ref="messageBlock" class="message-block">
    <div class="message-item" v-for="item of messageList" :key="item.id">
      <div class="profile">
        <van-image
          width="1rem"
          height="1rem"
          lazy-load
          :src="item.headImg || 'https://img.yzcdn.cn/vant/cat.jpeg'"
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
import { defineComponent, watch, nextTick, ref } from "vue";
export default defineComponent({
  name: "MessageBlock",
  props: {
    messageList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const messageBlock = ref(null);
    // 自动滚动到底部
    watch(
      () => props.messageList,
      (nval, oval) => {
        nextTick(() => {
          const messageBlcokElement = messageBlock.value;
          messageBlcokElement.scrollTop =
            messageBlcokElement.scrollHeight - messageBlcokElement.clientHeight;
        });
      },
      {
        immediate: true,
        deep: true,
      },
    );
    return {
      messageBlock,
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

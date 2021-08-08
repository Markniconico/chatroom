<template>
  <div ref="messageBlock" class="message-block">
    <div
      class="message-item"
      :class="{ right: item.user === userinfo.id }"
      v-for="item of messageList"
      :key="item.id"
    >
      <div class="profile">
        <van-image
          width="1rem"
          height="1rem"
          lazy-load
          :src="item.headImg || 'https://img.yzcdn.cn/vant/cat.jpeg'"
        />
      </div>
      <div class="user" :class="{ right: item.user === userinfo.id }">
        <span class="name">
          {{ members[item.user] }}
        </span>
        <span class="message">
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, nextTick, ref, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "MessageBlock",
  props: {
    messageList: {
      type: Array,
      default: () => [],
    },
    members: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const messageBlock = ref(null);
    const store = useStore();
    const userinfo = store.state.user.userinfo;

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
      userinfo,
      messageBlock,
    };
  },
});
</script>

<style lang="postcss" scoped>
.message-block {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  height: 100%;
  overflow-y: auto;
  & .message-item {
    height: 46px;
    display: flex;
    &.right {
      flex-direction: row-reverse;
    }
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
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 6px;
      &.right {
        align-items: flex-end;
      }
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

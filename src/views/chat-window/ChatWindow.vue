<template>
  <div class="chat-window">
    <!-- 头部 -->
    <header class="header">
      <van-nav-bar
        :title="item.chat_name || '未知会话'"
        right-text="按钮"
        left-arrow
        placeholder
        @click-left="$emit('windowBack')"
        safe-area-inset-top
      >
        <template #right>
          <van-icon name="friends-o" />
        </template>
      </van-nav-bar>
    </header>
    <!-- 聊天区域 -->
    <main class="main">
      <div class="content">
        <message-block :messageList="item.messages"></message-block>
      </div>
      <div class="input">
        <message-input
          v-model="message"
          @send="sendMessage"
          @changeHeight="changeHeight"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import MessageBlock from "./MessageBlock.vue";
import MessageInput from "./MessageInput.vue";

export default defineComponent({
  name: "ChatWindow",
  components: {
    MessageBlock,
    MessageInput,
  },
  props: {
    item: {
      default: () => {
        return {
          chat_name: "",
          is_group: false,
          members: [],
          messages: [],
        };
      },
    },
  },
  emits: ["windowBack"],
  setup(props, ctx) {
    const state = reactive({
      message: "",
      windowHeight: false,
    });
    /* 发送消息到输入框中 */
    const sendMessage = () => {
      if (state.message.trim() !== "") {
        // todo 获取当前登录用户   填写到user
        props.item.messages.push({
          content: state.message,
          read: false,
          user: 2,
        });
        state.message = "";
      }
    };

    /* 改变输出框高度 */
    const changeHeight = (boolean) => {};

    return {
      ...toRefs(props),
      ...toRefs(state),
      sendMessage,
      changeHeight,
    };
  },
});
</script>

<style lang="postcss" scoped>
.chat-window {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .header {
  }
  & .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    & .content {
      flex: 1;
      overflow: hidden;
    }
    & .input {
    }
  }
}
</style>

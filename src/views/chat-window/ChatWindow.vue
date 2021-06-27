<template>
  <div class="chat-window">
    <!-- 头部 -->
    <header>
      <van-nav-bar
        title="基佬群"
        right-text="按钮"
        left-arrow
        fixed
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
    <main
      class="window van-hairline--bottom"
      :class="{ upHeight: windowHeight }"
    >
      <message-block :messageList="messageList"></message-block>
    </main>
    <!-- 输出框区域 -->
    <footer class="input">
      <message-input
        v-model="message"
        @send="sendMessage"
        @changeHeight="changeHeight"
      />
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import MessageBlock from "./MessageBlock.vue";
import MessageInput from "./MessageInput.vue";

export default defineComponent({
  name: "ChatWindow",
  components: {
    MessageBlock,
    MessageInput,
  },
  emits: ["windowBack"],
  setup(props, ctx) {
    const message = ref("");
    const messageList = reactive([
      {
        msg: "今晚吃啥子1",
        author: "小2明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小3明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小4明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小5明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小明",
        id: "97897",
        time: "2021/2/6 18:42",
      },
      {
        msg: "今晚吃啥子",
        author: "小李",
        id: "978977",
        time: "2021/2/6 18:41",
      },
      {
        msg: "今晚吃啥子",
        author: "小张",
        id: "978197",
        time: "2021/2/6 18:40",
      },
      {
        msg: "吃屁",
        id: "91247897",
        time: "2021/2/6 18:43",
      },
    ]);
    /* 发送消息到输入框中 */
    const sendMessage = () => {
      if (message.value.trim() !== "") {
        messageList.unshift({
          msg: message.value,
          id: "91247897",
          time: "2021/2/6 18:43",
        });
        message.value = "";
      }
    };

    const windowHeight = ref(false);
    /* 改变输出框高度 */
    const changeHeight = (boolean) => {
      windowHeight.value = boolean;
      console.log(windowHeight.value);
    };

    return {
      message,
      messageList,
      sendMessage,
      changeHeight,
      windowHeight,
    };
  },
});
</script>

<style lang="postcss" scoped>
.chat-window {
  & .input {
    position: fixed;
    bottom: 0;
    width: 100%;
    & .van-cell {
      align-items: center;
    }
  }

  & .window {
    display: flex;
    flex-direction: column-reverse;
    height: calc(100vh - 100px);
    padding: 0 10px 5px;
    overflow: auto;
    overscroll-behavior: contain;
  }
  & .upHeight {
    height: calc(100vh - 250px);
  }
}
</style>

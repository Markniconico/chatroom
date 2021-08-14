<template>
  <div class="chat-window">
    <!-- 头部 -->
    <header class="header">
      <van-nav-bar
        :title="chatName || '未知会话'"
        right-text="按钮"
        left-arrow
        placeholder
        @click-left="$emit('windowBack')"
        safe-area-inset-top
      >
        <template #right>
          <!-- <van-icon name="friends-o" /> -->
        </template>
      </van-nav-bar>
    </header>
    <!-- 聊天区域 -->
    <main class="main">
      <div class="content">
        <message-block
          :messageList="item.messages"
          :members="item.members"
        ></message-block>
      </div>
      <div class="input">
        <message-input @send="sendMessage" />
      </div>
    </main>
  </div>
</template>

<script>
import { Notify } from "vant";
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
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
          chat_id: "",
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
    const store = useStore();
    const state = reactive({
      windowHeight: false,
    });
    const userinfo = store.state.user.userinfo;
    /* 发送消息到输入框中 */
    const sendMessage = (message) => {
      if (message.trim() !== "") {
        store
          .dispatch("socket/sendMessage", {
            chat_id: props.item.chat_id,
            message: {
              content: message,
              read: false,
              user: userinfo.id,
            },
          })
          .then((_) => {
            props.item.messages.push({
              content: message,
              read: false,
              user: userinfo.id,
            });
            state.message = "";
          })
          .catch((err) => {
            console.error(err);
            Notify({
              type: "error",
              message: "消息发送失败",
            });
          });
      }
    };

    const chatName = computed(() => {
      if (props.item.is_group) {
        return props.item.chat_name;
      } else {
        const id = Object.keys(props.item.members).find(
          (key) => key != userinfo.id,
        );
        return props.item.members[id];
      }
    });

    return {
      ...toRefs(state),
      userinfo,
      chatName,
      sendMessage,
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

<template>
  <div class="chat-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="getChatList"
      style="height: 100%;"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getChatList"
      >
        <user-list
          @click="triggerChatWindow(true, item)"
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        />
      </van-list>
    </van-pull-refresh>
  </div>
  <transition name="van-slide-right">
    <div v-show="drawerShow" class="chat-drawer">
      <chat-window
        @windowBack="triggerChatWindow(false)"
        :item="currentItem"
      ></chat-window>
    </div>
  </transition>
</template>

<script>
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
  ref,
  watchEffect,
} from "vue";
import { useStore } from "vuex";
import UserList from "@/components/UserList.vue";
import ChatWindow from "@/views/chat-window/ChatWindow.vue";
export default defineComponent({
  name: "Chat",
  components: {
    UserList,
    ChatWindow,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      list: computed(() => store.state.chat.chatList), //聊天列表
      loading: false, //列表loading
      finished: false, //列表完成加载
      refreshing: false, //下拉刷新
      drawerShow: false, //聊天窗口
      currentItem: {
        chat_name: "",
        is_group: false,
        members: [],
        messages: [],
      },
    });

    // 监听新消息
    const socket = store.getters["socket/getSocket"];
    socket.on("receiverMessage", ({ chat_id, message }) => {
      const { messages } = state.list.find((item) => item.chat_id === chat_id);
      messages.push(message);
    });

    const getChatList = async () => {
      state.refreshing = false;
      state.finished = false;
      state.loading = true;
      await store.dispatch("chat/getChatList");
      state.loading = false;
      state.finished = true;
    };

    const triggerChatWindow = (flag, item) => {
      console.log(item);
      state.drawerShow = flag;
      state.currentItem = item;
    };

    return {
      ...toRefs(state),
      getChatList,
      triggerChatWindow,
    };
  },
});
</script>

<style lang="postcss" scoped>
.chat-list {
  height: 100%;
}
.chat-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
}
</style>

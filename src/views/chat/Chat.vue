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
      <chat-window @windowBack="triggerChatWindow(false)"></chat-window>
    </div>
  </transition>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { mapActions, useStore } from "vuex";
import UserList from "@/components/UserList.vue";
import ChatWindow from "@/views/chat-window/ChatWindow.vue";
export default defineComponent({
  name: "Chat",
  components: {
    UserList,
    ChatWindow,
  },
  setup() {
    const state = reactive({
      list: [], //聊天列表
      loading: false, //列表loading
      finished: false, //列表完成加载
      refreshing: false, //下拉刷新
      drawerShow: false, //聊天窗口
    });

    const store = useStore();

    const getChatList = async () => {
      state.refreshing = false;
      state.list = [];
      state.finished = false;
      state.loading = true;
      const result = await store.dispatch("chat/getChatList");
      state.list = result.data;
      state.loading = false;
      state.finished = true;
    };

    const triggerChatWindow = (flag, item) => {
      console.log(item);
      state.drawerShow = flag;
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
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
}
</style>

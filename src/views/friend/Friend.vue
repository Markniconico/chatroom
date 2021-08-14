<template>
  <div class="friends">
    <transition name="van-slide-down">
      <div v-show="cardShow" class="user-card">
        <div class="info">
          <div class="name">{{ currentUser.username }}</div>
          <div class="desc">白日依山尽，黄河入海流</div>
        </div>
        <div class="actions">
          <div class="cancel button" @click="closeCard">
            <van-icon name="cross" />
          </div>
          <div class="chat button" @click="createChat">聊</div>
        </div>
      </div>
    </transition>
    <div class="user-list" :class="{ cardShow: cardShow }">
      <van-index-bar>
        <!-- <van-index-anchor index="A" /> -->
        <div
          class="user-item"
          v-for="item in userList"
          :key="item.username"
          @click="showCard(item)"
        >
          <van-image
            class="image"
            lazy-load
            :src="item.headImg || 'https://img.yzcdn.cn/vant/cat.jpeg'"
          />
          <span class="content">{{ item.username }}</span>
        </div>
      </van-index-bar>
    </div>
  </div>

  <transition name="van-slide-right">
    <div v-show="drawerShow" class="chat-drawer">
      <ChatWindow
        @windowBack="triggerChatWindow(false)"
        :item="currentItem"
      ></ChatWindow>
    </div>
  </transition>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import ChatWindow from "@/views/chat-window/ChatWindow.vue";

const store = useStore();
await store.dispatch("chat/getUserList");
const userList = computed(() => store.state.chat.userList);
const cardShow = ref(false);
let currentUser = reactive({ username: "", desc: "" });

async function showCard(user) {
  currentUser.username = user.username;
  currentUser.desc = user.desc;
  cardShow.value = true;
}

async function closeCard() {
  cardShow.value = false;
}

async function createChat() {
  const chat_message = await store.dispatch("socket/createChat", {
    chat_user_id: currentUser.id,
  });
  // console.log(chat_message);
  triggerChatWindow(true, chat_message);

  const index = store.state.chat.chatList.findIndex(
    (chat) => chat.chat_id === chat_message.chat_id,
  );
  if (index == -1) {
    store.commit("chat/Set_ChatList", [
      ...store.state.chat.chatList,
      chat_message,
    ]);
  }
}

// 消息弹出框
let drawerShow = ref(false);
let currentItem = reactive({
  chat_name: "",
  is_group: false,
  members: [],
  messages: [],
});

const triggerChatWindow = (flag = false, item = currentItem) => {
  // console.log(item, currentItem);
  drawerShow.value = flag;
  currentItem.chat_id = item.chat_id;
  currentItem.chat_name = item.chat_name;
  currentItem.is_group = item.is_group;
  currentItem.members = item.members;
  currentItem.messages = item.messages;
};
</script>

<style lang="postcss" scoped>
.friends {
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  row-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  & .user-card {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100px;
    box-shadow: 0 0 4px rgb(0 0 0 / 10%);
    border-radius: 3px;
    margin: 10px;
    width: calc(100% - 20px);
    padding: 8px;
    box-sizing: border-box;
    &.absolute {
      position: absolute;
    }
    & .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      & .name {
        font-size: 18px;
      }
      & .desc {
        font-size: 14px;
        color: rgb(170, 170, 170);
      }
    }
    & .actions {
      flex: 0 0 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      & .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        overflow: hidden;
        &.cancel {
          background-color: #ccc;
          color: rgb(85, 85, 85);
        }
        &.chat {
          background-color: green;
          color: #fff;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  & .user-list {
    width: 100%;
    height: 100%;
    font-size: 20px;
    overflow-y: auto;
    transition: height 0.3s ease-in;
    &.cardShow {
      height: calc(100% - 110px);
      transition: height 0.3s ease-out;
    }
    & .user-item {
      display: flex;
      align-items: center;
      padding: 8px;
      cursor: pointer;
      & .image {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        overflow: hidden;
      }
      & .content {
        margin-left: 6px;
      }
    }
  }
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

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
          <div class="chat button">聊</div>
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
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const result = await store.dispatch("chat/getUserList");
const userList = reactive(result.data);
let cardShow = ref(false);
let currentUser = reactive({ username: "", desc: "" });
const showCard = (user) => {
  currentUser.username = user.username;
  currentUser.desc = user.desc;
  cardShow.value = true;
};
const closeCard = () => {
  cardShow.value = false;
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
</style>

<template>
  <div class="user-list">
    <van-index-bar>
      <!-- <van-index-anchor index="A" /> -->
      <div class="user-item" v-for="item in userList" :key="item.username">
        <van-image
          class="image"
          lazy-load
          :src="item.headImg || 'https://img.yzcdn.cn/vant/cat.jpeg'"
        />
        <span class="content">{{ item.username }}</span>
      </div>
    </van-index-bar>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const result = await store.dispatch("chat/getUserList");
const userList = reactive(result.data);
</script>

<style lang="postcss" scoped>
.user-list {
  padding: 10px;
  font-size: 20px;
  overflow-y: auto;
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
</style>

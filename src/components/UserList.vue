<template>
  <router-link to="/chatwindow">
    <div class="user-list van-hairline--bottom">
      <div class="list-profile">
        <van-image
          width="1.5rem"
          height="1.5rem"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="list-info">
        <p class="name">海澜之家</p>
        <p class="message">欢迎新人入群,嘎嘎</p>
      </div>
      <div class="list-date">
        <p class="date">17:21</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss" scoped>
.user-list {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  & .list-info {
    flex: 1;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .name {
      flex: 1;
      font-size: 16px;
      font-weight: 400;
    }
    & .message {
      margin-top: 14px;
      font-size: 14px;
      color: #999;
    }
  }
  & .list-date {
    font-size: 10px;
    color: #999;
  }
}
</style>

<template>
  <div>
    <!-- 信息 -->
    <div class="user" @click="toMyInfo">
      <van-image
        width="75"
        height="75"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        radius="10"
      />
      <div class="user-info">
        <h2 class="user-name">{{ userinfo.username }}</h2>
      </div>
      <div class="arrow">
        <van-icon name="arrow" size="16px" color="#B3B3B3" />
      </div>
    </div>
    <!-- 跳转导航 -->
    <div class="menu">
      <!-- <van-cell title="支付" icon="chat-o" is-link />
      <van-cell title="朋友圈" icon="photo-o" is-link />
      <van-cell title="表情" icon="smile-o" is-link />
      <van-cell title="卡包" icon="paid" is-link /> -->
      <van-cell title="退出" icon="down" is-link @click="logOut" />
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "My",
  setup() {
    const store = useStore();
    const router = useRouter();

    const userinfo = store.state.user.userinfo;

    // 跳转到我的信息
    const toMyInfo = () => {
      console.log("toInfo");
    };

    // 登出
    const logOut = () => {
      Dialog.confirm({
        message: "是否退出",
      })
        .then(() => {
          store.dispatch("user/logOut").then(() => {
            router.push("/login");
          });
        })
        .catch((err) => {
          console.log("取消");
        });
    };

    return {
      toMyInfo,
      logOut,
      userinfo,
    };
  },
});
</script>

<style lang="postcss" scoped>
.user {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  & .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0 5px 15px;
    & .user-name {
      font-size: 24px;
      font-weight: 700;
    }
  }
  & .arrow {
    align-self: center;
  }
}
.menu {
  & div:first-of-type {
    margin: 10px 0;
  }
  & div:last-of-type {
    margin-top: 10px;
  }
}
</style>

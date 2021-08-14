<template>
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
      <p class="name">{{ chatName }}</p>
      <p class="message">
        {{ firstMessage }}
      </p>
    </div>
    <div class="list-date">
      <p class="date">17:21</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "UserList",
  components: {},
  props: {
    item: {
      default: () => {
        return {
          members: [],
          message: [],
          is_group: false,
        };
      },
    },
  },
  setup({ item }) {
    const store = useStore();
    const userinfo = store.state.user.userinfo;

    const firstMessage = computed(() => {
      if (!item.messages.length) return "";
      return item.messages[item.messages.length - 1]?.content ?? "";
    });

    const chatName = computed(() => {
      if (item.is_group) {
        return item.chat_name;
      } else {
        const id = Object.keys(item.members).find((key) => key != userinfo.id);
        return item.members[id];
      }
    });

    return {
      userinfo,
      chatName,
      firstMessage,
    };
  },
});
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

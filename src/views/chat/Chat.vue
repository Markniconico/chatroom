<template>
  <div class="chat">
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
        <user-list v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import UserList from "@/components/UserList.vue";
import { mapActions, useStore } from "vuex";
export default defineComponent({
  name: "Chat",
  components: {
    UserList,
  },
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    });

    const store = useStore();

    async function getChatList() {
      state.refreshing = false;
      state.list = [];
      state.finished = false;
      state.loading = true;
      const result = await store.dispatch("chat/getChatList");
      state.list = result.data;
      state.loading = false;
      state.finished = true;
    }

    return {
      ...toRefs(state),
      getChatList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.chat {
  height: 100%;
}
</style>

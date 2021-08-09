<template>
  <div class="nav-bar">
    <van-nav-bar :title="title" right-text="按钮">
      <template #right>
        <!-- <van-icon name="search" color="#000" size=".5rem" /> -->
        <!-- <van-popover
          v-model:show="showPopover"
          @select="onSelect"
          theme="dark"
          :actions="actions"
          color="#fff"
          size="16"
          teleport="body"
          placement="bottom-end"
          :offset="offset"
        >
          <template #reference>
            <van-icon name="add-o" color="#000" size=".5rem" />
          </template>
        </van-popover> -->
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { popover } from "./model/navbarModel.js";

export default defineComponent({
  name: "NavBar",
  setup() {
    const route = useRoute();
    const title = computed(() => {
      return route.meta.title;
    });

    const { actions, showPopover, onSelect, offset } = popover();

    return {
      title,
      actions,
      offset,
      onSelect,
      showPopover,
    };
  },
});
</script>

<style lang="postcss" scoped>
.nav-bar {
  & .van-nav-bar {
    & >>> .van-icon {
      margin-left: 10px;
    }
    & >>> .van-popover__wrapper {
      display: flex;
    }
  }
}
</style>

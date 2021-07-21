<template>
  <div class="message-input">
    <!-- 输出框 -->
    <van-field
      v-model="message"
      rows="1"
      autosize
      type="textarea"
      left-icon="volume-o"
      placeholder="请输入"
      clearable
      autofocus
      center
      @focus="closeAll"
    >
      <template #right-icon>
        <van-icon
          name="smile-o"
          size=".5rem"
          color="#000"
          @click="togglEmmoji"
        />
      </template>
      <template #button>
        <van-icon
          v-if="!message"
          name="add-o"
          size=".5rem"
          color="#000"
          @click="toggleOption"
        />
        <van-button
          v-else
          type="primary"
          @click="sendMessage(message)"
          size="mini"
          >发送</van-button
        >
      </template>
    </van-field>

    <!-- 选项弹出框 -->
    <options-popup v-show="optionShow"></options-popup>

    <!-- 表情弹出框 -->
    <emoji-popup v-show="emojiShow" @selectEmoji="selectOnEmoji"></emoji-popup>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import OptionsPopup from "./OptionsPopup.vue";
import EmojiPopup from "./EmojiPopup.vue";
import { inputModel } from "./model/inputModel.js";
export default defineComponent({
  name: "MessageInput",
  components: {
    OptionsPopup,
    EmojiPopup,
  },
  props: {},
  emits: ["send"],
  setup(props, context) {
    const state = reactive({
      optionShow: false,
      emojiShow: false,
    });
    const { message, sendMessage } = inputModel(context);

    const toggleOption = () => {
      state.optionShow = !state.optionShow;
      state.emojiShow = false;
    };

    const togglEmmoji = () => {
      state.optionShow = false;
      state.emojiShow = !state.emojiShow;
    };

    const closeAll = () => {
      state.optionShow = false;
      state.emojiShow = false;
    };

    const selectOnEmoji = (value) => {
      message.value += value;
    };

    return {
      ...toRefs(state),
      toggleOption,
      togglEmmoji,
      message,
      sendMessage,
      closeAll,
      selectOnEmoji,
    };
  },
});
</script>

<style lang="postcss">
.message-input {
  & .van-field__right-icon {
    & i {
      cursor: pointer;
    }
  }
  & .van-field__body .van-field__button {
    display: flex !important;
    align-items: center;
  }
  & .van-grid {
    background-color: #f5f5f5;
    padding-top: 10px;
    & .van-grid-item__content--horizontal {
      border-radius: 20px;
      flex-direction: column;
      background-color: #fff;
      & .van-grid-item__text {
        font-size: 10px;
      }
    }
    &
      .van-grid-item__content--horizontal
      &
      .van-grid-item__icon
      + .van-grid-item__text {
      margin-left: 0;
    }
  }
}
</style>

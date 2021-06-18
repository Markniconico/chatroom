<template>
  <div class="message-input">
    <!-- 输出框 -->
    <van-field
      v-model="message"
      :class="{ 'input-fixed': optionShow || emojiShow }"
      rows="1"
      autosize
      type="textarea"
      left-icon="volume-o"
      placeholder="请输入"
      clearable
      autofocus
      center
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
          v-if="toggleButton"
          name="add-o"
          size=".5rem"
          color="#000"
          @click="toggleOption"
        />
        <van-button v-else type="primary" @click="sendMessage" size="mini"
          >发送</van-button
        >
      </template>
    </van-field>

    <!-- 选项弹出框 -->
    <options-popup :optionShow="optionShow"></options-popup>

    <!-- 表情弹出框 -->
    <emoji-popup
      :emojiShow="emojiShow"
      @selectEmoji="selectOnEmoji"
    ></emoji-popup>
  </div>
</template>

<script>
import { computed, defineComponent, watch } from "vue";
import OptionsPopup from "./OptionsPopup.vue";
import EmojiPopup from "./EmojiPopup.vue";
import { inputModel } from "./model/inputModel.js";
import { optionModel } from "./model/optionModel.js";
import { emojiModel } from "./model/emojiModel.js";

export default defineComponent({
  name: "MessageInput",
  components: {
    OptionsPopup,
    EmojiPopup,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props, context) {
    const { message, sendMessage } = inputModel(props, context);

    const { optionShow, toggleOption } = optionModel();

    const { emojiShow, togglEmmoji, selectOnEmoji } = emojiModel(message);

    /* 监听两个选项是否展开事件,如果展开把聊天框抬高 */
    watch(
      [() => optionShow.value, () => emojiShow.value],
      ([newOtion, newEmoji], [oldOption, oldEmoji]) => {
        const boolean = newOtion || newEmoji;
        context.emit("changeHeight", boolean);
      },
    );

    // 监听输入事件
    const toggleButton = computed(() => {
      return props.modelValue === "" ? true : false;
    });

    return {
      message,
      sendMessage,
      toggleButton,
      optionShow,
      toggleOption,
      emojiShow,
      togglEmmoji,
      selectOnEmoji,
    };
  },
});
</script>

<style lang="postcss">
.message-input {
  & .input-fixed {
    position: fixed;
    bottom: 160px;
  }
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

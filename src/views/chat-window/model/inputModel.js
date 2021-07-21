import { reactive, toRefs } from "vue";

// 输入框发送消息
export function inputModel(context) {
  const state = reactive({
    message: "",
  });

  const sendMessage = () => {
    context.emit("send", state.message);
    state.message = "";
  };

  return {
    ...toRefs(state),
    sendMessage,
  };
}

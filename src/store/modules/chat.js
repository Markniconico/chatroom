import { getChatListApi } from "@api/chat";

export default {
  namespaced: true,
  state: {
    chatList: [],
  },
  mutations: {
    Set_ChatList(state, value) {
      state.chatList = value;
    },
  },
  actions: {
    getChatList() {
      return new Promise((resolve, reject) => {
        getChatListApi()
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};

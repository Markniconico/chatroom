import { getChatListApi, getUserListApi } from "@api/chat";

export default {
  namespaced: true,
  state: {
    chatList: [],
    userList: [],
  },
  mutations: {
    Set_ChatList(state, value) {
      state.chatList = value;
    },
    Set_UserList(state, value) {
      state.userList = value;
    },
  },
  actions: {
    getChatList({ commit }) {
      return new Promise((resolve, reject) => {
        getChatListApi()
          .then(({ code, data, message }) => {
            if (code === 200) {
              commit("Set_ChatList", data);
              resolve();
            } else {
              reject(message);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getUserList({ commit }) {
      return new Promise((resolve, reject) => {
        getUserListApi()
          .then(({ code, data, message }) => {
            if (code === 200) {
              commit("Set_UserList", data);
              resolve();
            } else {
              reject(message);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};

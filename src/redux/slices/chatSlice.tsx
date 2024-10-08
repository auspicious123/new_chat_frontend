import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  chatRequests: { chatRequestId: string; user: string }[];
  messages: { [key: string]: { messageId: string; message: string; seen: boolean }[] };
  unreadCount: { [key: string]: number };
  activeChatId: string | null;
}

const initialState: ChatState = {
  chatRequests: [],
  messages: {},
  unreadCount: {},
  activeChatId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    newChatRequestReceived: (
      state,
      action: PayloadAction<{ chatRequestId: string; user: string }>
    ) => {
      state.chatRequests.push(action.payload);
    },
    acceptChatRequest: (state, action: PayloadAction<string>) => {
      state.activeChatId = action.payload; // Set active chat
      state.chatRequests = state.chatRequests.filter(
        (request) => request.chatRequestId !== action.payload
      );
    },
    receiveMessage: (
      state,
      action: PayloadAction<{ chatRequestId: string; messageId: string; message: string }>
    ) => {
      const { chatRequestId, messageId, message } = action.payload;
      if (!state.messages[chatRequestId]) {
        state.messages[chatRequestId] = [];
      }
      state.messages[chatRequestId].push({ messageId, message, seen: false });

      if (state.activeChatId !== chatRequestId) {
        state.unreadCount[chatRequestId] = (state.unreadCount[chatRequestId] || 0) + 1;
      }
    },
    switchActiveChat: (state, action: PayloadAction<string>) => {
      state.activeChatId = action.payload;
    },
    markMessageAsSeen: (state, action: PayloadAction<string>) => {
      const chatRequestId = action.payload;
      if (state.messages[chatRequestId]) {
        state.messages[chatRequestId].forEach((message) => (message.seen = true));
      }
      state.unreadCount[chatRequestId] = 0;
    },
  },
});

export const {
  newChatRequestReceived,
  acceptChatRequest,
  receiveMessage,
  switchActiveChat,
  markMessageAsSeen,
} = chatSlice.actions;

export default chatSlice.reducer;

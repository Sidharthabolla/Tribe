import {create} from 'zustand';

const API_URL = "http://dummy-chat-server.tribechat.pro/api/"

export const useStore = create((set) => ({
  msgList: [],
  participantsData: [],
  isLoading: false,
  error: null,

  fetchData: async (uri) => {
    set({ isLoading: true });
    try {
      const messages = await fetch(API_URL+uri);
      const msgList = await messages.json();
      const participants = await fetch(API_URL+'participants/all');
      const participantsData = await participants.json();
      set({ msgList, participantsData, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
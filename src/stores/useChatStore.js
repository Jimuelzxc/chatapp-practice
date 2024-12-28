import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [
    {
      role: "system",
      content: "You're iron man",
    },
    {
      role: "assistant",
      content: "Hello, I'm iron man",
    },
  ],
  addData: (data) =>
    set(() => ({
      messages: data,
    })),
}));
export default useChatStore;

import Wrapper from "@/layouts/Wrapper";
import useChatStore from "@/stores/useChatStore";
import useLoadStore from "@/stores/useLoadStore";

import axios from "axios";
import { useRef } from "react";

import useInput from "@/hooks/useInput";
export default function ChatInput() {
  const messages = useChatStore((state) => state.messages);
  const addData = useChatStore((state) => state.addData);
  const loading = useLoadStore((state) => state.loading);
  const setLoading = useLoadStore((state) => state.loadingToggle);
  const userInput = useInput("");
  const buttonRef = useRef();

  const fetchData = async () => {
    const newMessage = [
      ...messages,
      { role: "user", content: userInput.value },
    ];
    addData(newMessage);
    userInput.setValue("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.pawan.krd/cosmosrp/v1/chat",
        {
          model: "cosmosrp",
          messages: newMessage,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const responseData = response.data.choices[0].message;
      addData([...newMessage, responseData]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="chat-input" className="border-t border-slate-900 py-7">
      <Wrapper>
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-slate-900 grow p-3"
            value={userInput.value}
            onChange={userInput.handleOnChange}
            onKeyDown={(e) => e.key === "Enter" && buttonRef.current.click()}
          />
          <button
            ref={buttonRef}
            className="bg-slate-900 text-white p-2 px-4"
            onClick={fetchData}
            disabled={loading}
          >
            Send
          </button>
        </div>
        <div className="text-center text-[0.7em] py-2 opacity-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </Wrapper>
    </div>
  );
}

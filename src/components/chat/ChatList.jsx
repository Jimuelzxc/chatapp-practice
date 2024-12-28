import Wrapper from "@/layouts/Wrapper";
import BotChat from "./BotChat";
import UserChat from "./UserChat";

import useChatStore from "@/stores/useChatStore";
import useLoadStore from "@/stores/useLoadStore";

export default function ChatList() {
  const messages = useChatStore((state) => state.messages);
  const loading = useLoadStore((state) => state.loading);

  const renderChatList = () => {
    return messages.map((data, index) => {
      if (data.role === "assistant") {
        return <BotChat key={index} data={data} />;
      } else if (data.role === "user") {
        return <UserChat key={index} data={data} />;
      }
      return null;
    });
  };
  return (
    <div id="chat-list" className="flex-1 overflow-scroll">
      <Wrapper className="flex flex-col gap-2 py-2">
        {renderChatList()}
        {loading && <img src="https://art.pixilart.com/cfb4e980fb7653f.gif" />}
      </Wrapper>
    </div>
  );
}

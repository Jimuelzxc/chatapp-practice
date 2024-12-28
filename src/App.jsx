import "./App.css";


import DefaultLayout from "@/layouts/defaultLayout";
import Navbar from "@/components/Navbar";
import ChatList from "@/components/chat/ChatList";
import ChatInput from "@/components/chat/ChatInput";
function App() {
  return (
    <DefaultLayout>
      <Navbar />
      <ChatList />
      <ChatInput />
    </DefaultLayout>
  );
}



export default App;

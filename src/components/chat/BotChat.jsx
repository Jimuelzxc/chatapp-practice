import axios from "axios";
import { useState } from "react";
export default function BotChat({ data }) {
  // MAKE ITALIC WHO WRAP IN 2 ASTERISKS
  let formattedText = data.content.replace(/\*(?!\*)(.*?)\*/g, "<em>$1</em>");
  const [loading, setLoading] = useState(false);

  const autoPlayAudio = (response) => {
    let audio = document.createElement("audio");
    audio.src = response.data.voice;
    audio.play();
  };
  const readALoud = async () => {
    const message = data.content;
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5175/",
        { message: message },
        { headers: { "Content-Type": "application/json" } }
      );
      autoPlayAudio(response)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="bot-chat" className="p-2 flex justify-start">
      <div className="border border-slate-900 p-2 w-[70%] md:w-[30%]">
        <p
          className="text-[0.8em]"
          dangerouslySetInnerHTML={{
            __html: formattedText,
          }}
        ></p>
        <div className="flex flex-row gap-2">
          <button
            className="text-[0.6em] opacity-50 hover:opacity-100 cursor-pointer"
            onClick={readALoud}
            disabled={loading}
          >
            Speak
          </button>
          {loading && <span className="text-[0.6em]">loading...</span>}
        </div>
      </div>
    </div>
  );
}

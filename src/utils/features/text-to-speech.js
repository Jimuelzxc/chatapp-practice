import { client } from "@gradio/client";

export const textToSpeech = async (message) => {
  const response_0 = await fetch(
    "https://platform.r2.fish.audio/task/5b26da07f18b4c3ebc291de472379943.mp3"  
  );
  const exampleAudio = await response_0.blob();

  const app = await client("fishaudio/fish-speech-1");
  const result = await app.predict("/inference_wrapper", [
    message, // string  in 'Realtime Transform Text' Textbox component
    false, // boolean  in 'Text Normalization' Checkbox component
    exampleAudio, // blob in 'Reference Audio' Audio component
    "", // string  in 'Reference Text' Textbox component
    1024, // number (numeric value between 512 and 2048) in 'Maximum tokens per batch' Slider component
    200, // number (numeric value between 0 and 300) in 'Iterative Prompt Length, 0 means off' Slider component
    0.7, // number (numeric value between 0.6 and 0.9) in 'Top-P' Slider component
    1.2, // number (numeric value between 1 and 1.5) in 'Repetition Penalty' Slider component
    0.7, // number (numeric value between 0.6 and 0.9) in 'Temperature' Slider component
    0, // number  in 'Seed' Number component
    "never", // string  in 'Use Memory Cache' Radio component
  ]);

  return result.data[0].url;
};


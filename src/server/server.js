import express from "express";
import cors from "cors";

import { textToSpeech } from "../utils/features/text-to-speech.js";

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); //Enable express

app.get("/", async (request, response) => {
  let data = request.query;
  let voice = await textToSpeech(data.message);
  response.send(` <audio controls>
  <source src=${voice} type="audio/mpeg">
  Your browser does not support the audio tag.
</audio> `);
});
app.post("/", async (req, res) => {
  const data = req.body;
  let voice = await textToSpeech(data.message);
  res.send({ success: true, voice: voice });
  const ipAddress = req.ip; // Get the client's IP address
  console.log({"IP Address:": ipAddress, user: req.body });
});

// Start the server
const PORT = 5175;
app.listen(PORT, () =>
  console.log(`Proxy server running on http://localhost:${PORT}`)
);

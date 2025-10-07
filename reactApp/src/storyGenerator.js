import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBu1hocZqruLA8sBetI5MytpphWln20q3s" });

async function prompt() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Tell me a spooky story in a maximum of three sentences",
  });
  console.log(response.text);
}

prompt();
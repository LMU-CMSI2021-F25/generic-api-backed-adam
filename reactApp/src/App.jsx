import { useState } from 'react'
import './App.css'
import { GoogleGenAI } from "@google/genai";
import ghost from './assets/ghost.png'
const myKey = import.meta.env.VITE_API_KEY;
const ai = new GoogleGenAI({ apiKey: myKey });

function App() {
  const [story, setStory] = useState('');
  async function fetchStory() {
    setStory("Creating your story... are you ready?")
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Tell me a spooky story in a maximum of three sentences",
    });
    setStory(" " + response.text);
  }
  return (
    <>
    <img src={ghost} className="ghost-image" alt="A cute ghost" />
      <h1>Tell me a spooky story</h1>
      <div className="card">
      <button onClick={fetchStory}>
      {'Click here for a spooky story!'}
        </button>
        <p>
        {story}
        </p>
      </div>
    </>
  )
}

export default App

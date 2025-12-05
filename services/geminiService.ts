import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

let chatSession: any = null;

const getClient = () => {
  // Ensure process.env.API_KEY is available. 
  // If running in a browser without a bundler that polyfills process, this might fail unless configured.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("Gemini API Key is missing. Ensure process.env.API_KEY is set.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  newMessage: string, 
  previousMessages: Message[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Error: API Key is missing. Check the console for details.";

  try {
    if (!chatSession) {
       chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: "You are a casual, friendly AI chat companion in a Discord-like interface. Keep your responses concise, conversational, and use markdown where appropriate (like bolding or code blocks). Do not be overly formal.",
        },
      });
    }

    const response = await chatSession.sendMessage({ message: newMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the servers right now. Please check your network or API key configuration.";
  }
};
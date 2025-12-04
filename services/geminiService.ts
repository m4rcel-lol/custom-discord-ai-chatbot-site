import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

let chatSession: any = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  newMessage: string, 
  previousMessages: Message[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Error: API Key is missing. Please check your configuration.";

  try {
    // We maintain a simple local chat session if possible, or create new one
    // Ideally, we'd persist the `chatSession` object, but for this stateless example 
    // we can re-hydrate somewhat or just use the persistent variable module-level.
    
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
    return "I'm having trouble connecting to the mainframe right now. Try again later!";
  }
};

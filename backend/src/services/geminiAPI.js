import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
apiKey: process.env.GEMINI_API_KEY});
export const generateAIResponse= async (promt)=>{
const interaction = await ai.interactions.create({
  model: "gemini-3.6-flash",
  input: "Explain how AI works in a few words",
  system_instructions: "The application uses the Google Gemini API as an AI-powered movie recommendation assistant for the MovieDatabase website. It analyzes the user's watchlist and favourite genres to recommend exactly three movies from the application's database, provides a brief reason for each recommendation, returns the results in JSON format, and only responds to movie-related queries. If a user asks about unrelated topics, the assistant politely redirects them to ask questions about movies.",
})
 return interaction.output_text
};


import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY, 
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateAIResponse = async (prompt) => {
  const response = await client.responses.create({
    model: "openai/gpt-oss-20b",
    input: [
      {
        role: "system",
        content:
          "The application uses an AI-powered movie recommendation assistant for the MovieDatabase website. It analyzes the user's watchlist and favourite genres to recommend a movie from the application's database, provides a brief reason for each recommendation, returns the results in JSON format, and only responds to movie-related queries. If a user asks about unrelated topics, the assistant politely redirects them to ask questions about movies.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.output_text;
};
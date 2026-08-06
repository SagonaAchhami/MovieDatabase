import { generateAIResponse } from "../services/geminiAPI.js";

export const getMovieRecommendation = async (req, res) => {
  try {
    console.log(req.body.prompt);

    const response = await generateAIResponse(req.body.prompt);

    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error(error);

    if (error.status === 429) {
      return res.status(429).json({
        error: "Rate limit exceeded. Please try again later.",
      });
    }

    if (error.status === 500) {
      return res.status(500).json({
        error: "Internal server error.",
      });
    }

    return res.status(error.status || 500).json({
      error: error.message,
    });
  }
};
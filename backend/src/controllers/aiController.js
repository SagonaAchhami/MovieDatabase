import {generateAIResponse} from '../services/geminiAPI.js'

export const getMovieRecommendation=async (req, res) => {
    try{
        const response =await generateAIResponse(req.body.prompt)
        return res.status(200).json({ data: response})
    }catch(error){
        if(error.status == 429){
            res.status(429).json({error: "Rate limit exceeded. Please try again later."})
        }
        else if(error.status == 500){
            res.status(500).json({error: "Internal server error."})
        }
        
    }
}
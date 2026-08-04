import {Router} from "express";
import{getMovieRecommendation} from "../controllers/aiController.js";

const router =Router();
router.post('/recommend',getMovieRecommendation);

export default router 
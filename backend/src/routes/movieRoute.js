import { Router } from "express";
import * as movieController from "../controllers/movieController.js";
import {movieRules, handleMovieValidation} from '../validators/movieValidator.js'
import authenticate from "../middleware/auth.js";

const router = Router();

router.get("/", movieController.getMovies);
router.get("/:id",  movieController.getMovieById);

router.post("/", authenticate,movieRules,handleMovieValidation, movieController.addMovie);

router.put("/:id",authenticate, movieController.updateMovie);

router.delete("/:id", authenticate, movieController.deleteMovie);

export default router;
import { Router } from "express";
import * as movieController from "../controllers/movieController.js";

const router = Router();

router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovieById);

router.post("/movies", movieController.addMovie);

router.put("/movies/:id", movieController.updateMovie);

router.delete("/movies/:id", movieController.deleteMovie);

export default router;
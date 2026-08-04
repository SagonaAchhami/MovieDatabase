import { Router } from "express";
import * as AuthController from "../controllers/authController.js";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import authenticate from "../middleware/auth.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/me", authenticate, getCurrentUser);

export default router;
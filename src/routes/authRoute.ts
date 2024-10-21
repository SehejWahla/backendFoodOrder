import express from "express";
const router = express.Router();
import authController from "../controllers/authController";

// /api/auth/signup
router.post("/signup", authController.signupUser);

// /api/auth/signup
router.post("/login", authController.loginUser);

export default router;

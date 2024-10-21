import express from "express";
const router = express.Router();
import authController from "../controllers/authController";

// /api/auth/signup
router.post("/", authController.signupUser);

export default router;

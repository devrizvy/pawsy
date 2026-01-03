import express from "express";
import { authController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { userValidationSchema } from "../Users/user.validation";
const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidationSchema.userValidation),
  authController.register
);
router.post("/login", authController.login);

export const authRoutes = router;

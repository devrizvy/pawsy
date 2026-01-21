import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/me" , userController.getMe )

export const userRoutes = router;

import express from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/me", userController.getMe);
router.put(
  "/profile",
  validateRequest(userValidationSchema.userInfoUpdateValidation),
  userController.UpdateUserInfo,
);

export const userRoutes = router;

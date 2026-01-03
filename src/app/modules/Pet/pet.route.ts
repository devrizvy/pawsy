import express from "express";
import { petControllers } from "./pet.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { petValidationSchema } from "./pet.validation";
import auth from "../../middlewares/auth";
const router = express.Router();

router.use(
  "/", auth(), 
  validateRequest(petValidationSchema.petValidation),
  petControllers.createPet
);

export const petRoutes = router;

import express from "express";
import { petControllers } from "./pet.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { petValidationSchema } from "./pet.validation";
const router = express.Router();

router.use(
  "/",
  validateRequest(petValidationSchema.petValidation),
  petControllers.createPet
);

export const petRoutes = router;

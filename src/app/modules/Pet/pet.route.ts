import express from "express";
import { petControllers } from "./pet.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { petValidationSchema } from "./pet.validation";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(petValidationSchema.petValidation),
  petControllers.createPet
);

router.get("/", auth(), petControllers.getAllPetFromDB);

router.get("/:petId", auth(), petControllers.getSinglePet);
router.put("/:petId" , )

export const petRoutes = router;

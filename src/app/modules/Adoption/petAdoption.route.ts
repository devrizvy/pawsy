import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { petAdoptionRequestSchema } from "./petAdoption.validation";
import { AdoptionController } from "./petAdoption.controller";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(petAdoptionRequestSchema.petAdoptionRequest),
  AdoptionController.postAdoptionRequest,
);
router.get("/", auth(), AdoptionController.getAdoptionRequests);
// router.put("/:requestedId")

export const adoptionRoutes = router;

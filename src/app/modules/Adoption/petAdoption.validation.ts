import z from "zod";
import { Status } from "../../../../generated/prisma/enums";

const petAdoptionRequest = z.object({
  body: z.object({
    petId: z.string(),
    petOwnershipExperience: z.string(),
    status: z.enum(Status).default(Status.PENDING),
  }),
});

const updateAdoptionRequestStatus = z.object({
  body: z.object({
    status: z.enum(Status),
  }),
});

export const petAdoptionRequestSchema = {
  petAdoptionRequest,updateAdoptionRequestStatus
};

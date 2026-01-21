import z from "zod";
import { Status } from "../../../../generated/prisma/enums";

const petAdoptionRequest = z.object({
  body: z.object({
    petId: z.string(),
    petOwnershipExperience: z.string(),
    status: z.enum(Status).default(Status.PENDING),
  }),
});

export const petAdoptionRequestSchema = {
  petAdoptionRequest,
};

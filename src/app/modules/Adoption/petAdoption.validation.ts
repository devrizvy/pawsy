import z from "zod";

const petAdoptionRequest = z.object({
  body: z.object({
    petId: z.string(),
    petOwnershipExperience : z.string()
  })
})

export const petAdoptionRequestSchema = {
  petAdoptionRequest
}
import z from "zod";
import { Size } from "../../../../generated/prisma/enums";

const petValidation = z.object({
  body: z.object({
    name: z.string(),
    species: z.string(),
    breed: z.string(),
    age: z.number(),
    size: z.enum(Size),
    location: z.string(),
    description: z.string(),
    temperament: z.string(),
    medicalHistory: z.string(),
    adoptionRequirements: z.string(),
  }),
});

const petUpdateValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    species: z.string().optional(),
    breed: z.string().optional(),
    age: z.number().optional(),
    size: z.enum(Size).optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    temperament: z.string().optional(),
    medicalHistory: z.string().optional(),
    adoptionRequirements: z.string().optional(),
  }),
});

export const petValidationSchema = {
  petValidation,
  petUpdateValidation,
};

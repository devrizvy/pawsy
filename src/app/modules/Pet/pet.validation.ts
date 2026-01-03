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

export const petValidationSchema = {
	petValidation,
};

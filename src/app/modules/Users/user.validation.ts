import z, { string } from "zod";

const userValidation = z.object({
	body: z.object({
		password: z.string(),
		user: z.object({
			name: string(),
			email: string(),
		}),
	}),
});

export const userValidationSchema = {
	userValidation,
};

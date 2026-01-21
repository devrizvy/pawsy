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
const userInfoUpdateValidation = z.object({
	body: z.object({
			name: string().optional(),
			email: string().optional(),
	}),
});

export const userValidationSchema = {
	userValidation,userInfoUpdateValidation
};

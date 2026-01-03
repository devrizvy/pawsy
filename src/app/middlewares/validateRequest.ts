import type z from "zod";
import { type NextFunction, type Request, type Response } from "express";

export const validateRequest = (schema: z.ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (err) {
      next(err);
    }
  };
};

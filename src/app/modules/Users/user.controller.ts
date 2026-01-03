import type { NextFunction, Request, Response } from "express";

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
};

export const userController = {
  createAdmin,
};

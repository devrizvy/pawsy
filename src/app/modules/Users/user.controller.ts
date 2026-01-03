import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

const createAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
  }
);

export const userController = {
  createAdmin,
};

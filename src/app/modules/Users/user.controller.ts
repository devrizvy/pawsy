import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

const registerUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
});




export const userController = {
  registerUser,
};

import { type NextFunction, type Request, type Response } from "express";
import status from "http-status";
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.name || "An error occured gng ! ",
    error: err,
  });
};

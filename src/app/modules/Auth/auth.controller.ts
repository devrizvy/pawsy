import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { authServices } from "./auth.service";

const register = catchAsync(async (req, res, next) => {
  console.log("register", req.body);
  const result = await authServices.register(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User registerd succesfully",
    data: result,
  });
});

const login = catchAsync(async (req, res, next) => {
  console.log("login");
});

export const authController = {
  register,
  login,
};

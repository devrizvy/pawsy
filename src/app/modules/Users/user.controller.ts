import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { userServices } from "./user.service";

const getUsers = catchAsync(async (req, res, next) => {
  console.log(req.body);
});

const getMe = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  const result = await userServices.getMe(token as string);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User retrived succesfully",
    data: result,
  });
});

const UpdateUserInfo = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  const result = await userServices.userInfoUpdate(token as string, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User info updated succesfully",
    data: result,
  });
});

export const userController = {
  getUsers,
  getMe,
  UpdateUserInfo,
};

import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { perServices } from "./pet.service";

const createPet = catchAsync(async (req, res, next) => {
  const result = perServices.createPet(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pet added succesfully",
    data: result,
  });
});

export const petControllers = {
  createPet,
};

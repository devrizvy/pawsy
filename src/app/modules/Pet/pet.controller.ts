import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { perServices } from "./pet.service";
import pick from "../../../shared/pick";

const getAllPetFromDB = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, ["breed", "species", "searchTerm"]);
  const result = await perServices.getAllPetFromDB(filter);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pets retrived succesfully",
    data: result,
  });
});
const createPet = catchAsync(async (req, res, next) => {
  const result = await perServices.createPet(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pet added succesfully",
    data: result,
  });
});

const getSinglePet = catchAsync(async (req, res, next) => {
  const { petId } = req.params;
  const result = await perServices.getSinglePet(petId as string);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pet's info retrived succesfully",
    data: result,
  });
});

export const petControllers = {
  createPet,
  getSinglePet,
  getAllPetFromDB,
};

import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { perServices } from "./pet.service";
import pick from "../../../shared/pick";
import { petFilterableFileds } from "./const";

const getAllPetFromDB = catchAsync(async (req, res, next) => {
  const filters = pick(req.query, petFilterableFileds);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  console.log("options :", options);
  const result = await perServices.getAllPetFromDB(filters, options);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pets retrived succesfully",
    meta: result.meta,
    data: result.data,
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

const updatePet = catchAsync(async (req, res) => {
  const { petId } = req.params;
  const data = req.body;
  console.log("FROM CONTROLLER : ", { petId, data });
  const result = await perServices.updatePet(petId as string, data);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Pet data updated succesfully",
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
  updatePet,
};

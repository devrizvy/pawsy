import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { perServices } from "./pet.service";
import { object } from "zod";

const pick = (obj , keys) => {
	console.log("fuckyou ",obj, keys)
	for(const key of keys){
		if(obj && Object.hasOwnProperty.call(obj, key)){
			console.log(key)
		}
	}
};

const getAllPetFromDB = catchAsync(async (req, res, next) => {
  pick(req.query, ["name", "email", "searchTerm"]);
//   console.log("controller : ", req.query);
  const result = await perServices.getAllPetFromDB(req.query);
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

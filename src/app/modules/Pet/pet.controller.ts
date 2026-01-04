import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { perServices } from "./pet.service";

const getAllPetFromDB = catchAsync(async (req, res, next) => {
	const result = await perServices.getAllPetFromDB();
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
	getSinglePet,getAllPetFromDB
};

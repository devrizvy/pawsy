import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import status from "http-status";
import { AdoptionServices } from "./petAdoption.service";

const postAdoptionRequest = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  const result = await AdoptionServices.postAdoptionRequest(req.body , token as string)
 	sendResponse(res, {
		statusCode: status.OK,
		success: true,
		message: "Adoption request submitted successfully",
		data: result,
	});
});

const getAdoptionRequests = catchAsync(async (req, res) => {
  const result = await AdoptionServices.getAdoptionRequests()
 	sendResponse(res, {
		statusCode: status.OK,
		success: true,
		message: "Adoption request submitted successfully",
		data: result,
	});
})



export const AdoptionController = {
  postAdoptionRequest,getAdoptionRequests
};

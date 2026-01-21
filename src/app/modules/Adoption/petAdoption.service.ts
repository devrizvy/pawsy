import type { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelper } from "../../../helper/jwtHelper";
import { prisma } from "../../../lib/prisma";
import type { TUser } from "../../interface/user";
import type { TAdoptionRequest } from "../../interface/adoptionRequest";
import catchAsync from "../../../shared/catchAsync";

const postAdoptionRequest = async (
  payload: TAdoptionRequest,
  token: string,
) => {
  // Veryfiy token & find the user
  if (!token) {
    throw new Error("You are not authorized gng !");
  }
  const decoded = jwtHelper.verifyToken(
    token,
    config.jwt.jwt_secret as Secret,
  ) as TUser;
  if (!decoded) {
    throw new Error("FORBBIDEN");
  }
  // Find the pet :
  const isPetExists = await prisma.pet.findUnique({
    where: {
      id: payload.petId,
    },
  });
  if (!isPetExists) {
    throw new Error("Pet dosen't exist ! ");
  }
  const checkDuplicate = await prisma.adoptionRequest.findFirst({
    where: {
      userId: decoded.id,
      petId: payload.petId,
    },
  });
  if (checkDuplicate) {
    throw new Error("Can't post duplicate request ");
  }
  const adoptionRequest = await prisma.adoptionRequest.create({
    data: {
      userId: decoded.id,
      petId: payload.petId,
      petOwnershipExperience: payload.petOwnershipExperience,
    },
  });
  return adoptionRequest;
};

const getAdoptionRequests = async () => {
  const result = await prisma.adoptionRequest.findMany();
  return result;
};

const updateAdoptionRequestStatus = async (id: string, payload: any) => {
  console.log(": ---> ", id, payload)
  const isAdobtionExists = await prisma.adoptionRequest.findUnique({
    where: {
      id: id,
    },
  });
  if (!isAdobtionExists) {
    throw new Error("NOT FOUND!");
  }
  const result = await prisma.adoptionRequest.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result; 
};

export const AdoptionServices = {
  postAdoptionRequest,
  getAdoptionRequests,
  updateAdoptionRequestStatus,
};

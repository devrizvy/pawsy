import { prisma } from "../../../lib/prisma";

const getAllPetFromDB = async () => {
 console.log("first")
};

const createPet = async (payload: any) => {
  console.log(payload);

  const result = await prisma.pet.create({
    data: payload,
  });

  return result;
};
const getSinglePet = async (petId: string) => {
  console.log(petId);

  const result = await prisma.pet.findFirstOrThrow({
    where: {
      id: petId,
    },
  });

  return result;
};

export const perServices = {
  createPet,
  getSinglePet,
  getAllPetFromDB,
};

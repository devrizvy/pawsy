import { prisma } from "../../../lib/prisma";

const createPet = async (payload: any) => {
  console.log(payload);
  
  const result = await prisma.pet.create({
    data: payload,
  });

  return result;
};

export const perServices = {
  createPet,
};

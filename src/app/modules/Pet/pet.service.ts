import type { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { petSearchableFileds } from "./const";

const getAllPetFromDB = async (pamras: any, options: any) => {
  const { limit, page } = options;

  const { searchTerm, ...filterData } = pamras;
  const andConditons: Prisma.petWhereInput[] = [];
  // ?Searching
  if (pamras.searchTerm) {
    andConditons.push({
      OR: petSearchableFileds.map((field) => ({
        [field]: {
          contains: pamras.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }
  // ?Filtering
  if (Object.keys(filterData).length > 0) {
    andConditons.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.petWhereInput = { AND: andConditons };

  //   *Final sending result ;
  const result = await prisma.pet.findMany({
    where: whereCondition,
  });
  return result;
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

import bcrypt from "bcryptjs";
import { prisma } from "../../../lib/prisma";

const register = async (payload: any) => {
  const hashedPass: string = await bcrypt.hash(payload.password, 9);
  console.log("hashed", payload.password, { hashedPass });

  const userData = {
    name: payload.user.name,
    email: payload.user.email,
    password: hashedPass,
  };
  console.log(userData);

  const result = await prisma.user.create({
    data: userData,
  });
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  console.log("from Servies", payload);

  const isUserExits = await prisma.user.findFirstOrThrow({
    where: {
      email: payload.email,
    },
  });
  if (!isUserExits) {
    throw new Error("The user dosen't exists ! ");
  }

  

  console.log(isUserExits);
};

export const authServices = {
  register,
  login,
};

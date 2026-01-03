import bcrypt from "bcrypt";
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

const login = async (payload: any) => {
  console.log("from Servies ");
};

export const authServices = {
  register,
  login,
};

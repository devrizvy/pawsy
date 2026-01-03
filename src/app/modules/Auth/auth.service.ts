import bcrypt from "bcryptjs";
import { prisma } from "../../../lib/prisma";
import config from "../../../config";
import { jwtHelper } from "../../../helper/jwtHelper";
import type { Secret } from "jsonwebtoken";

const register = async (payload: any) => {
  const hashedPass = await bcrypt.hash(payload.password, 9);
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

  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: payload.email,
    },
  });
  if (!userData) {
    throw new Error("The user dosen't exists ! ");
  }

  const isPasswordCorrect: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );
  if (!isPasswordCorrect) {
    throw new Error("The password is incorrect !");
  }

  const accessToken = jwtHelper.generateToken(
    userData,
    config.jwt.jwt_secrect as Secret,
    config.jwt.jwt_access_token_expires_in as string
  );
  console.log(accessToken);

  const refreshToken = jwtHelper.generateToken(
    userData,
    config.jwt.refresh_token_secrect as Secret,
    config.jwt.refresh_token_expires_in as string
  );
  console.log(refreshToken);
  return {
    ...userData , accessToken, refreshToken
  }
};

export const authServices = {
  register,
  login,
};

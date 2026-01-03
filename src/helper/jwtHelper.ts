import jwt, { type Secret } from "jsonwebtoken";

const generateToken = (
  payload: any,
  secret: jwt.Secret,
  expiresIn: string
): string => {
  return jwt.sign(payload, secret, { expiresIn } as jwt.SignOptions);
};

const verifyToken = (token: any, secret: jwt.Secret) => {
  return jwt.verify(token, secret);
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};

import type { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelper } from "../../../helper/jwtHelper";

const postAdoptionRequest = async (payload: any, token: string) => {
  console.log(payload, token);
  // Veryfiy token & find the user 
  if (!token) {
    throw new Error("You are not authorized gng !");
  }
  const user = jwtHelper.verifyToken(token, config.jwt.jwt_secret as Secret);
  if (!user) {
    throw new Error("FORBBIDEN");
  }
  console.log("User Data : --> ",user);
  
  const requestData = {
    userId: user.id,
    
    
  }
  
  
  
  
};

export const AdoptionServices = {
  postAdoptionRequest,
};

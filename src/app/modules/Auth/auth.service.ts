const register = async (payload: any) => {
  console.log("from Servies", payload);
const userData = payload.user;
console.log("ONLY USERDATA : ", userData)
console.log("password", payload.password)

co 


};

const login = async (payload: any) => {
  console.log("from Servies ");
};

export const authServices = {
  register,
  login,
};

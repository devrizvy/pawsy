import catchAsync from "../../../shared/catchAsync";

const register = catchAsync(async (req, res, next) => {
  console.log("register", req.body);
});

const login = catchAsync(async (req, res, next) => {
  console.log("login");
});

export const authController = {
  register,
  login,
};

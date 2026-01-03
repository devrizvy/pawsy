import catchAsync from "../../../shared/catchAsync";

const getUsers = catchAsync(async (req, res, next) => {
  console.log(req.body);
});




export const userController = {
  getUsers,
};

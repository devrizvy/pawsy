import type { Response } from "express";

type TResponse<T> = {
	statusCode: number;
	success: boolean;
	message?: string;
	data: T;
};

// export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
//   res.status(data?.statusCode).json({
//     success: data.success,
//     message: data.message,
//     data: data.data,
//   });
// };

export const sendResponse = <T>(
	res: Response,
	data: {
		statusCode: number;
		success: boolean;
    message?: string;
		meta? : any
		data: T;
	},
) => {
	res.status(data?.statusCode).json({
		success: data.success,
    message: data.message,
		meta: data.meta,
		data: data.data,
	});
};

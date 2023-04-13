import { NextApiResponse } from "next";
import { ApiResponse } from "../models";

const handleResponse = (res: NextApiResponse, code: number, data: ApiResponse<any | any[]>) => {
  res.status(code).json(data);
};

export default handleResponse;

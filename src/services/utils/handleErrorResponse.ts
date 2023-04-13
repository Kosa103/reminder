import { NextApiResponse } from "next";

const handleErrorResponse = (res: NextApiResponse, code: number, message: string) => {
  res.status(code).json({ message });
};

export default handleErrorResponse;

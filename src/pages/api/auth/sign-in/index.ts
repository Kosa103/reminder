import { NextApiRequest, NextApiResponse } from "next";
import { Knex } from "knex";
import { REQUEST_METHODS } from "@/common/utils/constants";
import { UserSignInResponseData } from "@/common/models/user";
import { API_MESSAGES } from "@/services/utils/messages";
import handleErrorResponse from "@/services/utils/handleErrorResponse";
import { handlePost } from "@/services/auth/signIn";
import handleResponse from "@/services/utils/handleResponse";
import { ApiResponse } from "@/services/models";
import initCors from "@/services/middlewares/cors";
import connectDB from "../../../../../database/config";

const Cors = require('cors');
const cors = initCors(
  Cors({
    methods: [REQUEST_METHODS.POST, REQUEST_METHODS.OPTIONS],
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await cors(req, res);

  switch (req.method) {
    case REQUEST_METHODS.POST:
      const db: Knex = connectDB();
      try {
        const response: ApiResponse<UserSignInResponseData> = await handlePost(db, req);

        handleResponse(res, 200, response);
      } catch (err) {
        handleErrorResponse(res, 500, API_MESSAGES.GENERAL.ERROR(err));
      } finally {
        db.destroy();
      }
      break;
    default:
      handleErrorResponse(res, 500, API_MESSAGES.GENERAL.INVALID_REQUEST_METHOD);
  }
};

export default handler;

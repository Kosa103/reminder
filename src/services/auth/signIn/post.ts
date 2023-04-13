import { NextApiRequest } from "next";
import { Knex } from "knex";
import { User, UserSignInBody, UserSignInResponseData } from "@/common/models/user";
import { ApiResponse } from "@/services/models";
import { API_MESSAGES } from "@/services/utils/messages";
import { getUserByEmail } from "../../../../database/query/user";
import { comparePassword, jwtSign } from "@/common/utils/crypto";
import { trimUserForClient } from "@/services/utils/helpers";

export const handlePost = async (db: Knex, req: NextApiRequest): Promise<ApiResponse<UserSignInResponseData>> => {
  const { body: signInData }: { body: UserSignInBody } = req;

  const existingUser: User | undefined = await getUserByEmail(db, signInData.email);

  if (!existingUser) {
    throw new Error(API_MESSAGES.USER.USER_NOT_EXISTS);
  }

  if (!(await comparePassword(signInData.password, existingUser.password))) {
    throw new Error(API_MESSAGES.USER.INVALID_CREDENTIALS);
  }

  const response: ApiResponse<UserSignInResponseData> = {
    data: {
      token: jwtSign(existingUser),
      user: trimUserForClient(existingUser),
    }
  };

  return response;
};

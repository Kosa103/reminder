import { NextApiRequest } from "next";
import { Knex } from "knex";
import { User, UserSignUpBody } from "@/common/models/user";
import { API_MESSAGES } from "@/services/utils/messages";
import { hashPassword } from "@/common/utils/crypto";
import { ApiResponse } from "@/services/models";
import { trimUserForClient } from "@/services/utils/helpers";
import { createUser, getUserByEmail } from "../../../../database/query/user";

export const handlePost = async (db: Knex, req: NextApiRequest): Promise<ApiResponse<User>> => {
  const { body: signUpData }: { body: UserSignUpBody } = req;

  const existingUser: User | undefined = await getUserByEmail(db, signUpData.email);

  if (existingUser) {
    throw new Error(API_MESSAGES.USER.EMAIL_IN_USE);
  }

  const newUser: User = await createUser(
    db,
    {
      ...signUpData,
      password: await hashPassword(signUpData.password),
    },
  );

  const response: ApiResponse<User> = { data: trimUserForClient(newUser) };

  return response;
};

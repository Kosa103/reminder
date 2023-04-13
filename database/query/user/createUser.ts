import { Knex } from "knex";
import { User, UserSignUpBody } from "@/common/models/user";
import { userSignUpSchema } from "@/common/utils/validationSchemas/user";
import { TABLES } from "../../constants";
import { generateUniqueSlug } from "../../helpers";

export const createUser = async (db: Knex, userData: UserSignUpBody) => {
  const validatedUser: UserSignUpBody = await userSignUpSchema.validate(
    userData,
    {
      abortEarly: true,
      stripUnknown: true,
    },
  );

  validatedUser.slug = await generateUniqueSlug(db, validatedUser.username);

  const results: User[] = await db(TABLES.USERS)
    .insert(validatedUser)
    .returning('*')
    .then((users: any) => {
      return users.map((user: any) => new User(user))
    });

  return results[0];
};

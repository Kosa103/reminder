import { Knex } from "knex";
import { User } from "@/common/models/user";
import { TABLES } from "../../constants";

export const getUserByEmail = async (db: Knex, email: string): Promise<User | undefined> => {
  const results: User[] = await db(TABLES.USERS)
    .select('*')
    .where({ email })
    .then((users: any) => {
      return users.map((user: any) => new User(user))
    });

  return results[0];
};

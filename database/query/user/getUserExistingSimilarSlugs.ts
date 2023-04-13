import { Knex } from "knex";
import { User } from "@/common/models/user";
import { FIELDS, TABLES } from "../../constants";

export const getUserExistingSimilarSlugs = async (db: Knex, slug: string): Promise<string[]> => {
  const results: string[] = await db(TABLES.USERS)
    .select(FIELDS.SLUG)
    .where(FIELDS.SLUG, 'like', `${slug}%`)
    .then((users: User[]) => users.map(user => user.slug));

  return results;
};

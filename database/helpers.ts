import { Knex } from "knex";
import { getUserExistingSimilarSlugs } from "./query/user";

export const generateUniqueSlug = async (db: Knex, username: string): Promise<string> => {
  const baseSlug: string = username.toLowerCase().replace(/\s+/g, '-');

  const slugs: string[] = await getUserExistingSimilarSlugs(db, baseSlug);

  const suffixes = slugs.map((slug: string) => {
    const suffixMatch = slug.match(new RegExp(`${baseSlug}-(\\d+)$`));
    return suffixMatch ? parseInt(suffixMatch[1]) : 0;
  });

  const highestSuffix = Math.max(...suffixes);
  const nextSuffix = highestSuffix + 1;
  
  return nextSuffix > 1 ? `${baseSlug}-${nextSuffix}` : baseSlug;
};
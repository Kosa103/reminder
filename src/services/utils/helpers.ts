import { User } from "@/common/models/user";

export const trimUserForClient = (user: User): User => {
  const trimmedUser: User = JSON.parse(JSON.stringify(user));

  delete trimmedUser.password;
  delete trimmedUser.deleted;

  return trimmedUser;
};
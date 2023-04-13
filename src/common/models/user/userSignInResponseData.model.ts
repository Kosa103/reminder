import { User } from ".";

export interface UserSignInResponseData {
  token: string;
  user: User;
}

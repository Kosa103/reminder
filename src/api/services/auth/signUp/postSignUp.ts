import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/storage/utils/constants";
import { API_PATHS } from "@/api/utils/paths";
import { User, UserSignUpBody } from "@/common/models/user";
import { ApiResponse } from "@/services/models";

export const postSignUp = async (
  body: UserSignUpBody,
): Promise<AxiosResponse<ApiResponse<User>>> => {
  const response: AxiosResponse<ApiResponse<User>> = await axios.post(
    `${API_URL}${API_PATHS.AUTH.SIGN_UP}`,
    body,
  );

  return response;
};

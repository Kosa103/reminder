import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/storage/utils/constants";
import { API_PATHS } from "@/api/utils/paths";
import { UserSignInBody, UserSignInResponseData } from "@/common/models/user";
import { ApiResponse } from "@/services/models";

export const postSignIn = async (
  body: UserSignInBody,
): Promise<AxiosResponse<ApiResponse<UserSignInResponseData>>> => {
  const response: AxiosResponse<ApiResponse<UserSignInResponseData>> = await axios.post(
    `${API_URL}${API_PATHS.AUTH.SIGN_IN}`,
    body,
  );

  return response;
};

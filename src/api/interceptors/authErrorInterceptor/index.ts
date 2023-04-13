import { AxiosInstance } from "axios";
import { handleTokenStorage, handleUserStorage } from "@/common/utils/helpers";

const authErrorInterceptor = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },(error) => {
      if (error?.response?.status === 401) {
        handleTokenStorage.remove();
        handleUserStorage.remove();
        window.location.pathname = '/';
      }
    }
  );
};

export default authErrorInterceptor;

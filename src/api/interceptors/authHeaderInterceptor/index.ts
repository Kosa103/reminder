import { AxiosInstance } from 'axios';
import { handleTokenStorage } from '@/common/utils/helpers';

const authHeaderInterceptor = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use(
    (request) => {
      const token: string = handleTokenStorage.get();
      request.headers["Authorization"] = `Bearer ${token}`;
      return request;
    },
    (error) => {
      console.error(error);
    },
  );
};

export default authHeaderInterceptor;

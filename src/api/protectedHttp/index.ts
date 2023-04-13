import axios, { AxiosInstance } from "axios";
import authHeaderInterceptor from "../interceptors/authHeaderInterceptor";
import authErrorInterceptor from "../interceptors/authErrorInterceptor";
import { API_URL } from "@/storage/utils/constants";

const protectedHttp: AxiosInstance = axios.create({
  baseURL: API_URL,
});

authHeaderInterceptor(protectedHttp);
authErrorInterceptor(protectedHttp);

export default protectedHttp;

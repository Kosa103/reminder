import { ApiResponseMeta } from ".";

export interface ApiResponse<T> {
  data: T;
  meta?: ApiResponseMeta;
}

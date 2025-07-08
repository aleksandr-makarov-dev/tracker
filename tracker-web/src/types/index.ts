type ApiResponseSuccess<T> = {
  flag: true;
  code: number;
  data: T;
  error: null;
};

type ApiResponseFail = {
  flag: false;
  code: number;
  data: null;
  error: string;
};

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseFail;

type ErrorResponse = {
  code: number;
};

type SuccessResponse<T> = {
  token: string;
  user: T;
};

export type APIResponse<T> = {
  message: string;
} & (ErrorResponse | SuccessResponse<T>);

declare type SuccessResponse = {
  info: string;
};

declare type ErrorResponse = {
  code: number;
};

declare type EmailVerificationAPIResponse = {
  message: string;
} & (SuccessResponse | ErrorResponse);

declare type ResetCodeSuccessResponse = {
  status: string;
};

declare type ResetCodeErrorResponse = {
  message: string;
  code: number;
};

declare type ResetCodeAPIResponse =
  | ResetCodeSuccessResponse
  | ResetCodeErrorResponse;

declare type ResetPassSuccessResponse = {
  token: string;
};

declare type ResetPassErrorResponse = {
  code: number;
};

declare type ResetPassAPIResponse = {
  message;
} & (ResetPassSuccessResponse | ResetPassErrorResponse);

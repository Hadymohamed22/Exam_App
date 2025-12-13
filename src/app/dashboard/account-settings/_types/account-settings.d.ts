import { ChangePasswordSchema } from "@/lib/schemas/settings.schema";
import { User } from "next-auth";
import z from "zod";

export type SettingsRoutes = "profile" | "change password";

export type AccountSettingsContent = {
  user?: User["user"];
};

export type ProfileSettingsProps = {
  user?: User["user"];
};

// Delete
export type DeleteSuccess = {
  message: string;
};

export type DeleteError = {
  message: string;
  code: number;
};

export type DeleteAPIResponse = DeleteSuccess | DeleteError;

// Update
export type UpdateSuccessResponse = {
  message: string;
  user: User["user"];
};

export type UpdateErrorResponse = {
  message: string;
  code: number;
};

export type UpdateAPIResponse = UpdateSuccessResponse | UpdateErrorResponse;

// change password
export type UpdatePasswordSuccess = {
  token: string;
};

export type UpdatePasswordError = {
  code: number;
};

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;

export type UpdatePasswordAPIResponse = { message: string } & (
  | UpdatePasswordSuccess
  | UpdatePasswordError
);

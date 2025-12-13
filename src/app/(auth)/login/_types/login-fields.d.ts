import { LoginSchema } from "@/lib/schemas/auth.schema";
import z from "zod";

export type LoginFields = z.infer<typeof LoginSchema>;

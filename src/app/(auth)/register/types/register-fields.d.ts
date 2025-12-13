import z from "zod";
import { RegisterSchema } from "@/lib/schemas/auth.schema";

export type RegisterFields = z.infer<typeof RegisterSchema>;

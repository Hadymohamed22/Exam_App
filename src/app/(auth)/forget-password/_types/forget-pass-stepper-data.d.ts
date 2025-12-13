import { ForgetPassStepperSchema } from "@/lib/schemas/auth.schema";
import z from "zod";

export type ForgetPassStepperData = z.infer<typeof ForgetPassStepperSchema>;

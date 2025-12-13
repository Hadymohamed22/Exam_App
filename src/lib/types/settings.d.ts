import z from "zod";
import { ProfileSettingSchema } from "../schemas/settings.schema";

type ProfileSettingsType = z.infer<typeof ProfileSettingSchema>;

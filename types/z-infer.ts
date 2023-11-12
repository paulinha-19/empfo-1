import { z } from "zod";
import formSchema from "../schemas/form";

export type FormData = z.infer<typeof formSchema>;
export type SignInData = Pick<FormData, 'email' | 'password'>

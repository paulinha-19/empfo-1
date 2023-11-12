import { z } from "zod";

const tokenSchema = z.object({
  token: z
    .string()
    .min(6, "O código deve ter no minimo 6 números")
    .max(6, "O código deve ter no máximo 6 números"),
});

export default tokenSchema;

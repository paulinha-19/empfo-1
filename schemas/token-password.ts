import { z } from "zod";

const tokenSchema = z.object({
  token: z
    .string()
    .min(6, "O código deve ter 6 números")
    .max(6, "O código deve ter 6 números"),
});

export default tokenSchema;

import { z } from "zod";

const forgotSchema = z.object({
  email: z.string().email("Insira um email válido"),
});

export default forgotSchema;

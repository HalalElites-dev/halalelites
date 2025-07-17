import z from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^\+?[\d\s\-\(\)]+$/.test(val);
  }, "Please enter a valid phone number"),
  message: z.string().min(10)

})
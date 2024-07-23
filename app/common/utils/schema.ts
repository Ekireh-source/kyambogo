import z from "zod"

export const feedbackSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3, {message: "Name must be at least 3 characters long"}),
    message: z.string().min(3).max(500),
});
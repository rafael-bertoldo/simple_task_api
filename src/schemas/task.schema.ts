import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  content: z.string().min(10, 'A tarefa deve conter no mínimo 10 caracteres'),
  active: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().or(z.null())
})

export const taskCreateSchema = taskSchema.pick({content: true})
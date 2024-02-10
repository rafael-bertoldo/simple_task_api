import { z } from "zod";
import { taskCreateSchema, taskSchema } from "../schemas/task.schema";

export type Task = z.infer<typeof taskSchema>
export type TaskCreate = z.infer<typeof taskCreateSchema>
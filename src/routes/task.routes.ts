import { Router } from "express";
import { validateBody } from "../middlewares/global.middleware";
import { taskCreateSchema } from "../schemas/task.schema";
import { createTaskController, readTasksController } from "../controllers/task.controller";

export const taskRouter: Router = Router()

taskRouter.post('/', validateBody(taskCreateSchema), createTaskController)
taskRouter.get('/', readTasksController)
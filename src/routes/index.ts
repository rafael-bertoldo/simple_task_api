import { Router } from "express";
import { taskRouter } from "./task.routes";

export const routes: Router = Router()

routes.use('/tasks', taskRouter)
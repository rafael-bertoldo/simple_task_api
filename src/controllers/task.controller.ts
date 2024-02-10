import { Request, Response } from "express";
import { createTaskService, readTasksService } from "../services/task.service";
import { Task } from "../interfaces/task.interface";

export const createTaskController = async (req: Request, res: Response): Promise<Response> => {
  const newTask = await createTaskService(req.body)

  return res.status(201).json(newTask)
}

export const readTasksController = async (req: Request, res: Response): Promise<Response> => {
  const tasks: Task[] = await readTasksService()

  return res.status(200).json(tasks)
}

// export const createTaskController = async (req: Request, res: Response): Promise<Response> => {}

// export const createTaskController = async (req: Request, res: Response): Promise<Response> => {}

// export const createTaskController = async (req: Request, res: Response): Promise<Response> => {}

// export const createTaskController = async (req: Request, res: Response): Promise<Response> => {}

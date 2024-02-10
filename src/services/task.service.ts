import { prisma } from "..";
import { Task, TaskCreate } from "../interfaces/task.interface";

export const createTaskService = async (data: TaskCreate): Promise<Task> => {
  return prisma.task.create({ data })
}

export const readTasksService = async (): Promise<Task[]> => {
  const tasks = await prisma.task.findMany()

  return tasks
}
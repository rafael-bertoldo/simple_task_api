import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import { ZodError, ZodTypeAny } from "zod";

export const handleErrors = (err: unknown, req: Request, res: Response, next: NextFunction): Response => {
  if(err instanceof AppError) {
    return res.status(err.status).json({message: err.message})
  }

  if(err instanceof ZodError) {
    return res.status(400).json({message: err.flatten().fieldErrors})
  }

  console.error(err)

  return res.status(500).json({message: 'Erro interno do servidor'})
}

export const validateBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
  req.body = schema.parse(req.body)
  return next()
}
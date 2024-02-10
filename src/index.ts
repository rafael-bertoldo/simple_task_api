import 'express-async-errors';
import express, { Application, json } from 'express';
import { handleErrors } from './middlewares/global.middleware';
import { routes } from './routes';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

export const prisma: PrismaClient = new PrismaClient()
export const app: Application = express();

app.use(cors())

app.use(json());

app.use('/api', routes)

app.use(handleErrors)
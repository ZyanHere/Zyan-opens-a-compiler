import express from 'express';
import { deleteCode, loadCode, saveCode } from '../controllers/compilerController';
import { verifyTokenAnonymous } from '../middlewares/verifyTokenAnonymous';
import { verifyToken } from '../middlewares/verifyToken';

export const compilerRouter = express.Router();

compilerRouter.post("/save",verifyTokenAnonymous,saveCode)
compilerRouter.post("/load",loadCode)
compilerRouter.delete("/delete/:id", verifyToken, deleteCode);
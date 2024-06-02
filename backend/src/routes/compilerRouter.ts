import express from "express";
import { verifyTokenAnonymous } from "../../middlewares/verifyTokenAnonymous";
import { verifyToken } from "../../middlewares/verifyToken";
import { deleteCode, editCode, getAllCodes, loadCode, saveCode } from "../../controllers/compilerController";


export const compilerRouter = express.Router();

compilerRouter.post("/save", verifyTokenAnonymous, saveCode);
compilerRouter.post("/load", verifyTokenAnonymous, loadCode);
compilerRouter.delete("/delete/:id", verifyToken, deleteCode);
compilerRouter.put("/edit/:id", verifyToken, editCode);
compilerRouter.get("/get-all-codes", getAllCodes);

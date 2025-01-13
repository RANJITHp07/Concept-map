import { Router } from "express";
import authRouter from "./auth.route";

export const webRouter = Router();

webRouter.use("/auth", authRouter);

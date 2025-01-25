import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import scriptRouter from "./script.route";

export const webRouter = Router();

webRouter.use("/auth", authRouter);
webRouter.use("/user", userRouter);
webRouter.use("/script", scriptRouter);

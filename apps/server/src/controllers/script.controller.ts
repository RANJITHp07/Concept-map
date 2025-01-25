import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { ScriptService } from "../services/script.service";

export class ScriptController {
  private readonly scriptService: ScriptService;

  constructor() {
    this.scriptService = new ScriptService();
  }

  createScipt = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.scriptService.createScript(req.body);
      res.status(201).json({
        status: "success",
        message: "Successfully created script",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

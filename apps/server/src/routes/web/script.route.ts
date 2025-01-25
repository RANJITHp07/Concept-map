import { Router } from "express";
import { ScriptController } from "../../controllers/script.controller";

export class ScriptRouter {
  public router: Router;
  private scriptController: ScriptController;

  constructor() {
    this.router = Router();
    this.scriptController = new ScriptController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post("/", this.scriptController.createScipt);
  }
}

const scriptRouter = new ScriptRouter();
export default scriptRouter.router;

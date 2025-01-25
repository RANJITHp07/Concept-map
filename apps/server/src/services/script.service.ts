import ScriptModel from "../repository/model/script.model";
import { CrudRepository } from "../repository/query/crud.repository";
import { IScript } from "../types/model";

export class ScriptService {
  private readonly crudRepository: CrudRepository<IScript>;

  constructor() {
    this.crudRepository = new CrudRepository(ScriptModel);
  }

  async createScript(data: IScript) {
    return await this.crudRepository.createDocument(data);
  }
}

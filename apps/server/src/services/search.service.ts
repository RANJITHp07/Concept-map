import ScriptModel from "../repository/model/script.model";
import { CrudRepository } from "../repository/query/crud.repository";
import { IScript } from "../types/model";

export class SearchService {
  private readonly crudRepository: CrudRepository<IScript>;

  constructor() {
    this.crudRepository = new CrudRepository(ScriptModel);
  }

  async searchScript(searchFilter: any) {
    const {
      skip = "0",
      take = 10,
      type = "",
      filter = "",
      textSearch,
      priceRange = "0",
    } = searchFilter;
    // console.log(priceRange);

    const filterQuery = {
      ...(type && { type: { $in: type.split(",") } }),
      ...(filter &&
        filter.length > 0 && {
          $or: filter.split(",").map((item: string) => {
            return {
              $or: [
                { genre: { $in: item.split(",") } },
                { industry_category: { $in: item.split(",") } },
              ],
            };
          }),
        }),
      ...(textSearch && {
        $or: [
          {
            "script.content.scenes.description": {
              $regex: textSearch,
              $options: "i",
            },
          },
          {
            "script.content.scenes.name": {
              $regex: textSearch,
              $options: "i",
            },
          },
          { "synopsis.content": { $regex: textSearch, $options: "i" } },
        ],
      }),
      ...(parseInt(priceRange) !== 0 && {
        $or: [
          { "script.price": { $lte: parseInt(priceRange) } },
          { "story_borad.price": { $lte: parseInt(priceRange) } },
          { "synopsis.price": { $lte: parseInt(priceRange) } },
        ],
      }),
    };

    const count = await this.crudRepository.fetchDocumentCount(filterQuery);
    const scripts = await this.crudRepository.fetchAllDocuments(
      filterQuery,
      parseInt(skip),
      parseInt(take as string),
      "userId"
    );
    return {
      scripts,
      count,
    };
  }
}

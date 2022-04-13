import { Category } from "../../models/category.model";
import { ICategoryRepository } from "../../repositories/ICategorires.repository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] | undefined {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };

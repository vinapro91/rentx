import { ICategoryRepository } from "../../repositories/ICategorires.repository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists)`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };

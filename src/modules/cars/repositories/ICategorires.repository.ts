import { Category } from "../models/category.model";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };

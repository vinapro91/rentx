import { Category } from "../../models/category.model";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategorires.repository";

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category | undefined {
    const category = this.categories.find((c) => c.name === name);
    return category;
  }
}

export { CategoriesRepository };

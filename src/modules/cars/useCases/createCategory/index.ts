import { CategoriesRepository } from "../../repositories/implementations/Category.repositories";
import { CreateCategoryController } from "./createCategory.controller";
import { CreateCategoryUseCase } from "./createCategory.useCase";

const caregoryRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(caregoryRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController, createCategoryUseCase };

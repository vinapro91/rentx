import { Router, Express } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = (app: Express) => {
  const categoriesRoute = Router();

  categoriesRoute.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
  });

  categoriesRoute.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
  });
  categoriesRoute.post(
    "/import",
    upload.single("file"),
    (request, response) => {
      importCategoryController.handle(request, response);
    }
  );

  app.use("/categories", categoriesRoute);
};
export { categoriesRoutes };

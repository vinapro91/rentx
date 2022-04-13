import express, { Express } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const routes = (app: Express) => {
  app.use(express.json());
  categoriesRoutes(app);
  specificationsRoutes(app);
};

export { routes };

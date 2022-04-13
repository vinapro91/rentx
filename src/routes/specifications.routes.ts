import { Router, Express } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = (app: Express) => {
  const specificationsRoute = Router();

  specificationsRoute.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
  });
  app.use("/specifications", specificationsRoute);
};

export { specificationsRoutes };

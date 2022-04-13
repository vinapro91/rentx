import express from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swagerFile from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerFile));
routes(app);

export { app };

import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCase/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCase/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };

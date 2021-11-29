import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    // await createCategoryUseCase.execute({ name, description });

    try {
      await createCategoryUseCase.execute({ name, description });
    } catch (ex) {
      return response.status(400).json({ error: ex.message });
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };

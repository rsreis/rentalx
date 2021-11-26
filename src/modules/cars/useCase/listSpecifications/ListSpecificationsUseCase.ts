import { Category } from "../../entities/Category";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Category[] {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };

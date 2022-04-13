import { Specification } from "../../models/Specification.model";
import { ISpecificationRepository } from "../ISpecification.repositories";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, createdAt: new Date() });
    this.specifications.push(specification);
  }
}

export { SpecificationRepository };

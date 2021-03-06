import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    description: string;
    name: string;
}

export class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("This specification already exists");
        }

        this.specificationsRepository.create({ name, description });
    }
}

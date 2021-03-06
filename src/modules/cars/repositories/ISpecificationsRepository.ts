import { Specification } from "../model/Specification";

export type ICreateSpecificationDTO = {
    name: string;
    description: string;
};

export interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

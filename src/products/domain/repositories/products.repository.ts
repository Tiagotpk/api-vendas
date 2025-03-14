import { RepositoryInterface } from "@/common/domain/repositories/repository.interface";
import { ProductModel } from "../models/products.model";

export type ProductId = {
    id: string;
}

export type CreateProductProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    created_At: Date;
    updated_At: Date;
}
export interface ProductsRepository extends RepositoryInterface<ProductModel, CreateProductProps> {
    findByName(name: string): Promise<ProductModel | null>;
    findAllByIds(productIds: ProductId[]): Promise<ProductModel[]>;
    conflictingName(name: string): Promise<void>;
}
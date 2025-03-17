import {faker} from "@faker-js/faker";
import { ProductModel } from "@/products/domain/models/products.model";
import { randomUUID } from "node:crypto";

export function ProductsDataBuilder(props: Partial<ProductModel>): ProductModel{
    return {
        id: props.id ?? randomUUID(),
        name: props.name ?? faker.commerce.productName(),
        price: props.price ?? Number(faker.commerce.price({min: 100, max: 1000, dec: 2})),
        quantity:  props.quantity ?? 10,
        created_At: props.created_At ?? new Date(),
        updated_At: props.updated_At ?? new Date(),
    }
}
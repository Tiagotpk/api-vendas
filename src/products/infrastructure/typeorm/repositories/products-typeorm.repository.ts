import { SearchInput, SearchOutput } from "@/common/domain/repositories/repository.interface";
import { ProductModel } from "@/products/domain/models/products.model";
import { CreateProductProps, ProductId, ProductsRepository } from "@/products/domain/repositories/products.repository";
import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { dataSource } from "@/common/infrastructure/typeorm";

export class ProductsTypeormRepository implements ProductsRepository {
    sortableFields: string[] = ["name", "created_at"];
    productsRepository: Repository<Product>;
    constructor() {
        this.productsRepository = dataSource.getRepository(Product);
    }
    findByName(name: string): Promise<ProductModel | null> {
        throw new Error("Method not implemented.");
    }
    findAllByIds(productIds: ProductId[]): Promise<ProductModel[]> {
        throw new Error("Method not implemented.");
    }
    conflictingName(name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    create(props: CreateProductProps): ProductModel {
        throw new Error("Method not implemented.");
    }
    insert(model: ProductModel): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }
    update(model: ProductModel): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    search(props: SearchInput): Promise<SearchOutput<ProductModel>> {
        throw new Error("Method not implemented.");
    }

  async findAll(): Promise<Product[]> {
    return this.connection.getRepository(ProductEntity).find();
  }

  async findById(id: string): Promise<Product | undefined> {
    return this.connection.getRepository(ProductEntity).findOne(id);
  }

  async save(product: Product): Promise<void> {
    await this.connection.getRepository(ProductEntity).save(product);
  }
}
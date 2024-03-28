import { Repository } from 'typeorm';
import { ProductsRepositoryInterface } from 'src/domain/products/products.repository.interface';
import { ProductModel } from '../mysql/entities/product.model';
export declare class ProductsRepository implements ProductsRepositoryInterface {
    private readonly productsRepository;
    constructor(productsRepository: Repository<ProductModel>);
    findBySellerId(sellerId: number): Promise<{
        name: string;
    }>;
    create(): Promise<{
        name: string;
    }>;
    findOne(id: any): Promise<ProductModel>;
}

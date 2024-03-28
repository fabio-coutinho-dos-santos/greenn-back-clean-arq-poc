import { ProductsRepositoryInterface } from 'src/domain/products/products.repository.interface';
export declare class GetCheckoutProduct {
    private readonly productRepository;
    constructor(productRepository: ProductsRepositoryInterface);
    execute(productId: number): Promise<any>;
}

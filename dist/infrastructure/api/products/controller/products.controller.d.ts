import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { UsersRepositoryInterface } from '../../../../domain/users/users.repository.interface';
import { CheckoutProductType } from '../types/checkout-products-type';
export declare class ProductsController {
    private readonly productRepository;
    private readonly usersRepository;
    constructor(productRepository: ProductsRepositoryInterface, usersRepository: UsersRepositoryInterface);
    findProductById(id: number): Promise<CheckoutProductType>;
}

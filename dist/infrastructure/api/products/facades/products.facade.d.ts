import { UsersRepositoryInterface } from '../../../../domain/users/users.repository.interface';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
export declare namespace Facade {
    class Products {
        private readonly productsRepository;
        private readonly usersRepository;
        constructor(productsRepository: ProductsRepositoryInterface, usersRepository: UsersRepositoryInterface);
        getProduct(productId: number): Promise<any>;
    }
}

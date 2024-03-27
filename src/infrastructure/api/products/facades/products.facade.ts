import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { GetCheckoutProduct } from 'src/use-cases/products/get-checkout-product/get-checkout-product';
import { GetProductSeller } from 'src/use-cases/products/get-product-seller/get-product-seller';

export module Facade {
  export class Products {
    constructor(
      private readonly productsRepository: ProductsRepositoryInterface,
      private readonly usersRepository: UsersRepositoryInterface,
    ) {}

    async getProduct(productId: number) {
      const product = await new GetCheckoutProduct(
        this.productsRepository,
      ).execute(productId);
      const seller = await new GetProductSeller(this.usersRepository).execute(
        productId,
      );
      return {
        ...product,
        seller,
      };
    }
  }
}

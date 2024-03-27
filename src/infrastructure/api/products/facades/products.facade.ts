import { UsersRepositoryInterface } from "src/domain/users/users.repository.interface";
import { ProductsRepositoryInterface } from "../../../../domain/products/products.repository.interface";
import { UsersRepository } from "src/infrastructure/database/typeorm/repositories/users.repository";
import { ProductsRepository } from "src/infrastructure/database/typeorm/repositories/products.repository";
import { GetCheckoutProduct } from "src/use-cases/products/get-checkout-product/get-checkout-product";
import { GetProductSeller } from "src/use-cases/products/get-product-seller/get-product-seller";

export module Facade {
  export class Products {
    
    private readonly usersRepository: UsersRepositoryInterface
    private readonly productsRepository: ProductsRepositoryInterface
    
    constructor() {
      this.usersRepository = new UsersRepository();
      this.productsRepository = new ProductsRepository();
    }

    async getProduct(productId: number) {
      const product = await new GetCheckoutProduct(this.productsRepository).execute(productId);
      const seller = await new GetProductSeller(this.usersRepository).execute(productId)
      return {
        ...
        product,
        seller
      }
    }
  }
}
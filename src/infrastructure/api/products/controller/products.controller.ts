import { Controller, Get, Param, Inject } from '@nestjs/common';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { GetCheckoutProduct } from '../../../../use-cases/products/get-checkout-product/get-checkout-product';
import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { GetProductSeller } from 'src/use-cases/products/get-product-seller/get-product-seller';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductsRepositoryInterface,
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const product = await new GetCheckoutProduct(this.productRepository).execute(id);
    const seller = await new GetProductSeller(this.usersRepository).execute(id)
    return {
      ...
      product,
      seller
    }
  }
}

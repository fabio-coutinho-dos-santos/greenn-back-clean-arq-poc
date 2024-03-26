import { Controller, Get, Param, Inject } from '@nestjs/common';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { GetCheckoutProduct } from '../../../../use-cases/get-checkout-product/get-checkout-product';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductsRepositoryInterface,
  ) {}

  @Get(':id')
  async findOne(@Param('id') productId: number) {
    const product = await new GetCheckoutProduct(this.productRepository).execute(productId);
    return product
  }
}

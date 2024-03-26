import { InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductsRepositoryInterface } from 'src/domain/products/products.repository.interface';

export class GetCheckoutProduct {
  constructor(
    private readonly productRepository: ProductsRepositoryInterface,
  ) {}

  async execute(productId: number) {
    try {
      return this.productRepository.findOne(productId);
    } catch (e: unknown) {
      Logger.log(e);
      throw new InternalServerErrorException()
    }
  }
}

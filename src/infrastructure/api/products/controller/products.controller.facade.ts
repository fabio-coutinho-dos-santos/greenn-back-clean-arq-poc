import { Controller, Get, Param } from '@nestjs/common';
import { Facade } from 'src/domain/products/facades/products.facade';

@Controller('products/facade')
export class ProductsControllerFacade {

  @Get(':productId')
  async findOne(@Param('productId') productId: number) {
   const productsFacade = new Facade.Products();
   return await productsFacade.getProduct(productId);
  }
}

import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { UsersRepositoryInterface } from '../../../../domain/users/users.repository.interface';
import { Facade } from '../facades/products.facade';
import { API_CONFIG } from '../../../../config';

@Controller(`${API_CONFIG.API_PREFIX}/${API_CONFIG.API_VERSION}/products`)
@ApiTags('Products')
export class ProductsController {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductsRepositoryInterface,
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  @Get(':id')
  async findProductById(@Param('id') id: number) {
    const productsFacade = new Facade.Products(
      this.productRepository,
      this.usersRepository,
    );
    const finalProduct = await productsFacade.getProduct(id);
    return finalProduct;
  }
}

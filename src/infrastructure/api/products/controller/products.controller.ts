import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { Facade } from '../facades/products.facade';
import { ApiTags } from '@nestjs/swagger';
import { API_CONFIG } from 'src/config';

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
  async findById(@Param('id') id: number) {
    const productsFacade = new Facade.Products(
      this.productRepository,
      this.usersRepository,
    );
    const finalProduct = await productsFacade.getProduct(id);
    return finalProduct;
  }
}

import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { UsersRepositoryInterface } from '../../../..//domain/users/users.repository.interface';
import { Facade } from '../facades/products.facade';
import { ApiTags } from '@nestjs/swagger';
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

  @Get(':prouductId')
  async findProductById(@Param('prouductId') prouductId: number) {
    const productsFacade = new Facade.Products(
      this.productRepository,
      this.usersRepository,
    );
    const finalProduct = await productsFacade.getProduct(prouductId);
    return finalProduct;
  }
}

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { GetCheckoutProduct } from '../../../../use-cases/products/get-checkout-product/get-checkout-product';
import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { GetProductSeller } from 'src/use-cases/products/get-product-seller/get-product-seller';
import { Facade } from 'src/domain/products/facades/products.facade';
import { CreateProductDto } from 'src/domain/products/dto/create-product.dto';
import { Product } from 'src/domain/products/entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productRepository: ProductsRepositoryInterface,
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  @Get(':id')
  async findById(@Param('id') id: any) {
    const product = await new GetCheckoutProduct(this.productRepository).execute(id);
    const seller = await new GetProductSeller(this.usersRepository).execute(id);
    
    return {
      ...product,
      seller,
    };
  }

  @Get('/facade/:productId')
  async findOne(@Param('productId') productId: number) {
    const productsFacade = new Facade.Products();
    const finalProduct = await productsFacade.getProduct(productId);
    return finalProduct;
  }
}

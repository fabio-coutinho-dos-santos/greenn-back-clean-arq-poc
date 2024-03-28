import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { UsersRepositoryInterface } from '../../../../domain/users/users.repository.interface';
import { Facade } from '../facades/products.facade';
import { API_CONFIG } from '../../../../config';
import { NotFoundError } from '../../@shared/common-swagger-types';
import { CheckoutProductType } from '../types/checkout-products-type';

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
	@ApiResponse({ status: 200, description: 'Product found', type: CheckoutProductType })
	@ApiResponse({ status: 404, description: 'Product not found', type: NotFoundError })
	async findProductById(@Param('id') id: number): Promise<CheckoutProductType> {
		const productsFacade = new Facade.Products(this.productRepository, this.usersRepository);
		const finalProduct = await productsFacade.getProduct(id);
		return finalProduct;
	}
}

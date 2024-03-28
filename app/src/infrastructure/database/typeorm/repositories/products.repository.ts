import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsRepositoryInterface } from 'src/domain/products/products.repository.interface';
import { ProductModel } from '../mysql/entities/product.model';

export class ProductsRepository implements ProductsRepositoryInterface {
	constructor(
		@InjectRepository(ProductModel)
		private readonly productsRepository: Repository<ProductModel>,
	) {}

	async findBySellerId(sellerId: number) {
		return {
			name: 'product-test',
		};
	}

	async create() {
		return {
			name: 'product-test',
		};
	}

	async findOne(id: any) {
		return await this.productsRepository.findOneBy({ id });
	}
}

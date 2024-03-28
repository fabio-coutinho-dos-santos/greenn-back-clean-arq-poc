import { ProductModel } from 'src/infrastructure/database/typeorm/mysql/entities/product.model';
import { RepositoryInterface } from '../@shared/repository.interface';

export interface ProductsRepositoryInterface extends RepositoryInterface<ProductModel> {
	findBySellerId(sellerId: number);
}

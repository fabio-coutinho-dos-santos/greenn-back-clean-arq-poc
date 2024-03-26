import { RepositoryInterface } from '../@Shared/repository.interface';

export interface ProductsRepositoryInterface extends RepositoryInterface {
  findBySellerId(sellerId: number);
}

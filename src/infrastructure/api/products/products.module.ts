import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsRepository } from 'src/infrastructure/database/typeorm/repositories/products.repository';
import { ProductsRepositoryInterface } from 'src/domain/products/products.repository.interface';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductsRepositoryInterface',
      useClass: ProductsRepository
    }
  ]
})
export class ProductsModule {}

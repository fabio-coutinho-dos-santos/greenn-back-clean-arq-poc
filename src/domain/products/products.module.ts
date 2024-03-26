import { Module } from '@nestjs/common';
import { ProductsController } from '../../infrastructure/api/products/controller/products.controller';
import { ProductsRepository } from 'src/infrastructure/database/typeorm/repositories/products.repository';
import { UsersRepository } from 'src/infrastructure/database/typeorm/repositories/users.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductsRepositoryInterface',
      useClass: ProductsRepository
    },
    {
      provide: 'UsersRepositoryInterface',
      useClass: UsersRepository
    }
  ]
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { ProductsController } from '../../infrastructure/api/products/controller/products.controller';
import { ProductsRepository } from '../../infrastructure/database/typeorm/repositories/products.repository';
import { UsersRepository } from '../../infrastructure/database/typeorm/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from '../../infrastructure/database/typeorm/mysql/entities/product.model';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from '../../infrastructure/database/typeorm/mysql/entities/users.model';

@Module({
	imports: [TypeOrmModule.forFeature([ProductModel, UserModel, ConfigModule])],
	controllers: [ProductsController],
	providers: [
		{
			provide: 'ProductsRepositoryInterface',
			useClass: ProductsRepository,
		},
		{
			provide: 'UsersRepositoryInterface',
			useClass: UsersRepository,
		},
	],
})
export class ProductsModule {}

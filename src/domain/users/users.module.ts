import { Module } from '@nestjs/common';
import { UsersController } from '../../infrastructure/api/users/controller/users.controller';
import { UsersRepository } from '../../infrastructure/database/typeorm/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../infrastructure/database/typeorm/mysql/entities/users.model';
import { ConfigModule } from '@nestjs/config';
import { ProductModel } from '../../infrastructure/database/typeorm/mysql/entities/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel, ProductModel, ConfigModule])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersRepositoryInterface',
      useClass: UsersRepository
    },
  ]
})
export class UsersModule {}

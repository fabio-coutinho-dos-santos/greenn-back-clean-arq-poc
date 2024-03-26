import { Module } from '@nestjs/common';
import { ProductsModule } from './domain/products/products.module';
import { UsersModule } from './domain/users/users.module';

@Module({
  imports: [ProductsModule, UsersModule]
})
export class AppModule {}

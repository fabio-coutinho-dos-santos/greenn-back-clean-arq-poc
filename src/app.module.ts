import { Module } from '@nestjs/common';
import { ProductsModule } from './domain/products/products.module';
import { UsersModule } from './domain/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/typeorm/mysql/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule,
    UsersModule,
    DatabaseModule,
    ProductsModule, 
    UsersModule]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/typeorm/mysql/database.module';
import { ProductsModule } from './domain/products/products.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule, DatabaseModule, ProductsModule, ProductsModule],
})
export class AppModule {}

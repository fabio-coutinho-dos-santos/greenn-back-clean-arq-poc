import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { ValidationPipe } from '@nestjs/common';
import { DatabaseService } from '../../../infrastructure/database/typeorm/mysql/database.service';
import { Repository } from 'typeorm';
import { ProductModel } from '../../../infrastructure/database/typeorm/mysql/entities/product.model';

jest.setTimeout(15000);

describe('UsersController', () => {
	let dbConnection: any;
	let httpServer: any;
	let app: any;
	let productRepository: Repository<ProductModel>;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleRef.createNestApplication();
		app.useGlobalPipes(new ValidationPipe());
		await app.init();

		dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
		httpServer = app.getHttpServer();
	});

	beforeAll(async () => {
		const environment = process.env.NODE_ENV;
		if (environment === 'test') {
			productRepository = dbConnection.getRepository(ProductModel);
			await productRepository.clear();
		}
	});

	afterAll(async () => {
		await app.close();
	});

	describe('Get product by Id', () => {
		describe('With valid id', () => {
			it('should return a product', async () => {
				console.log(process.env.NODE_ENV);
				const newProduct = {
					id: 1,
					name: 'Test',
					description: 'Description',
				};
				await productRepository.save(newProduct);
				const response = await request(httpServer).get(`/api/v1/products/1`);
				const product = response.body;
				expect(product).toBeDefined();
				expect(product).toMatchObject(newProduct);
			});
		});
	});
});

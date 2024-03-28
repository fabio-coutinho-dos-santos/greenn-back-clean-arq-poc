import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsRepositoryInterface } from '../../../../domain/products/products.repository.interface';
import { GetCheckoutProduct } from '../../../../use-cases/products/get-checkout-product/get-checkout-product';
import { CheckoutProductType } from '../types/checkout-products-type';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productRepositoryFake: ProductsRepositoryInterface
  let productRepositoyReal: ProductsRepositoryInterface

  beforeEach(async () => {

    productRepositoryFake = {
      findOne: (productId: number) => {
        return Promise.resolve({name: 'product-from-test'});
      },

      findBySellerId: (productId: number) => {
        return Promise.resolve({name: 'product-from-test'});
      },

      create: () => {
        return Promise.resolve({name: 'product-from-test'});
      }
    }

    // productRepositoyReal = new ProductsRepository();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: "ProductsRepositoryInterface",
          useValue: productRepositoyReal
        }
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shold return a product-test', async() => {
    const fakeProductId = 1;
    const product : CheckoutProductType = await new GetCheckoutProduct(productRepositoyReal).execute(fakeProductId)
    // console.log(product);
    // expect(product.name).toBe('product-from-test')
    expect(product.data).toBeDefined()
    expect(product.data.id).toBe(673)
    expect(product.data.name).toBe("Venda ")
  })
});

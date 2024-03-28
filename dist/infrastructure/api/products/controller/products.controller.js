"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_facade_1 = require("../facades/products.facade");
const config_1 = require("../../../../config");
const common_swagger_types_1 = require("../../@shared/common-swagger-types");
const checkout_products_type_1 = require("../types/checkout-products-type");
let ProductsController = class ProductsController {
    constructor(productRepository, usersRepository) {
        this.productRepository = productRepository;
        this.usersRepository = usersRepository;
    }
    async findProductById(id) {
        const productsFacade = new products_facade_1.Facade.Products(this.productRepository, this.usersRepository);
        const finalProduct = await productsFacade.getProduct(id);
        return finalProduct;
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product found', type: checkout_products_type_1.CheckoutProductType }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found', type: common_swagger_types_1.NotFoundError }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findProductById", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)(`${config_1.API_CONFIG.API_PREFIX}/${config_1.API_CONFIG.API_VERSION}/products`),
    (0, swagger_1.ApiTags)('Products'),
    __param(0, (0, common_1.Inject)('ProductsRepositoryInterface')),
    __param(1, (0, common_1.Inject)('UsersRepositoryInterface')),
    __metadata("design:paramtypes", [Object, Object])
], ProductsController);
//# sourceMappingURL=products.controller.js.map
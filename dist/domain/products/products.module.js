"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("../../infrastructure/api/products/controller/products.controller");
const products_repository_1 = require("../../infrastructure/database/typeorm/repositories/products.repository");
const users_repository_1 = require("../../infrastructure/database/typeorm/repositories/users.repository");
const typeorm_1 = require("@nestjs/typeorm");
const product_model_1 = require("../../infrastructure/database/typeorm/mysql/entities/product.model");
const config_1 = require("@nestjs/config");
const users_model_1 = require("../../infrastructure/database/typeorm/mysql/entities/users.model");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_model_1.ProductModel, users_model_1.UserModel, config_1.ConfigModule])],
        controllers: [products_controller_1.ProductsController],
        providers: [
            {
                provide: 'ProductsRepositoryInterface',
                useClass: products_repository_1.ProductsRepository,
            },
            {
                provide: 'UsersRepositoryInterface',
                useClass: users_repository_1.UsersRepository,
            },
        ],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map
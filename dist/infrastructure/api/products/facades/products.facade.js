"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
const get_checkout_product_1 = require("../../../../use-cases/products/get-checkout-product/get-checkout-product");
const get_product_seller_1 = require("../../../..//use-cases/products/get-product-seller/get-product-seller");
var Facade;
(function (Facade) {
    class Products {
        constructor(productsRepository, usersRepository) {
            this.productsRepository = productsRepository;
            this.usersRepository = usersRepository;
        }
        async getProduct(productId) {
            const product = await new get_checkout_product_1.GetCheckoutProduct(this.productsRepository).execute(productId);
            const seller = await new get_product_seller_1.GetProductSeller(this.usersRepository).execute(productId);
            return Object.assign(Object.assign({}, product), { seller });
        }
    }
    Facade.Products = Products;
})(Facade || (exports.Facade = Facade = {}));
//# sourceMappingURL=products.facade.js.map
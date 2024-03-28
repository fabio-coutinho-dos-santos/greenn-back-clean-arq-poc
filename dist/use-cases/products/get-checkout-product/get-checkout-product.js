"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCheckoutProduct = void 0;
const common_1 = require("@nestjs/common");
class GetCheckoutProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(productId) {
        try {
            return this.productRepository.findOne(productId);
        }
        catch (e) {
            common_1.Logger.log(e);
            throw new common_1.InternalServerErrorException();
        }
    }
}
exports.GetCheckoutProduct = GetCheckoutProduct;
//# sourceMappingURL=get-checkout-product.js.map
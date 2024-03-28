"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductSeller = void 0;
class GetProductSeller {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(sellerId) {
        return await this.usersRepository.findOne(sellerId);
    }
}
exports.GetProductSeller = GetProductSeller;
//# sourceMappingURL=get-product-seller.js.map
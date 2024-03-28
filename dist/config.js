"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_CONFIG = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.API_CONFIG = {
    API_PREFIX: (_a = process.env.API_PREFIX) !== null && _a !== void 0 ? _a : 'api',
    API_VERSION: (_b = process.env.API_VERSION) !== null && _b !== void 0 ? _b : 'v1',
    SERVER_PORT: (_c = process.env.SERVER_PORT) !== null && _c !== void 0 ? _c : 3000
};
//# sourceMappingURL=config.js.map
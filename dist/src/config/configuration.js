"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const { PORT, NODE_ENV, SECRET_KEY, MONGO_URL, PASSWORD } = process.env;
const configuration = Object.freeze({
    port: PORT,
    env: NODE_ENV,
    secretKey: SECRET_KEY,
    mongoURL: MONGO_URL,
    password: PASSWORD
});
exports.default = configuration;
//# sourceMappingURL=configuration.js.map
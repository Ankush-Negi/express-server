"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../extraTs/utils");
const jwt = require("jsonwebtoken");
const configuration_1 = require("../../config/configuration");
const UserRepository_1 = require("../../repositories/user/UserRepository");
exports.default = (module, permissionType) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield req.headers.authorization;
        const { secretKey } = configuration_1.default;
        const decodeUser = yield jwt.verify(token, secretKey);
        if (!decodeUser) {
            throw new Error('Invalid Token');
        }
        const user = yield new UserRepository_1.default().findOne({
            _id: decodeUser.originalId,
            email: decodeUser.email
        });
        req.user = user._id;
        if (user === null) {
            throw new Error('Invalid Id and email');
        }
        req.user = user;
        if (!utils_1.hasPermission(module, decodeUser.role, permissionType)) {
            throw new Error('Permission Denied');
        }
        next();
    }
    catch (error) {
        next({
            message: error.message,
            status: 403,
            error: 'Unauthorised Access'
        });
    }
});
//# sourceMappingURL=authMiddleWare.js.map
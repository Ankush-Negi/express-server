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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserRepository_1 = require("../../repositories/user/UserRepository");
const configuration_1 = require("../../config/configuration");
class UserController {
    constructor() {
        this.userRepository = new UserRepository_1.default();
        this.me = (req, res, next) => {
            try {
                res.send(req.user);
            }
            catch (err) {
                return next({
                    error: err,
                    message: err
                });
            }
        };
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const userData = yield this.userRepository.findOne({ email });
                if (!userData) {
                    throw new Error('Email is Invalid');
                }
                const result = yield bcrypt.compare(password, userData.password);
                if (result) {
                    const originalId = userData.originalId;
                    const role = userData.role;
                    const token = yield jwt.sign({ email, originalId, role }, configuration_1.default.secretKey, { expiresIn: (60 * 60) / 4 });
                    res.send({
                        message: 'Token Generated',
                        token
                    });
                }
                else {
                    throw new Error('Password is Invalid');
                }
            }
            catch (error) {
                if (error.message) {
                    next({
                        message: error.message,
                        status: 403,
                        error: 'Error in token Generation'
                    });
                }
                else {
                    next({
                        error: 'Not Found'
                    });
                }
            }
        });
    }
}
UserController.getInstance = () => {
    if (!UserController.instance) {
        UserController.instance = new UserController();
    }
    return UserController.instance;
};
exports.default = UserController.getInstance();
//# sourceMappingURL=Controller.js.map
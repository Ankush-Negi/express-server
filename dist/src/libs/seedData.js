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
const UserRepository_1 = require("../repositories/user/UserRepository");
const configuration_1 = require("../config/configuration");
const userRepository = new UserRepository_1.default();
function seedData() {
    return __awaiter(this, void 0, void 0, function* () {
        const { password } = configuration_1.default;
        const hashPassword = password;
        const User = {
            name: 'Ankush Negi',
            email: 'ankush.negi@successive.tech',
            address: 'Noida',
            role: 'head-trainer',
            dob: new Date('1998-04-25'),
            mobileNumber: 9557126356,
            hobbies: ['football'],
            password: hashPassword
        };
        const count = yield userRepository.count({ deletedAt: undefined });
        if (count === 0) {
            console.log('User is seeded');
            return userRepository.create(User);
        }
        else {
            console.log('User is already seeded');
            console.log('Number of total users: ', count);
        }
    });
}
exports.default = seedData;
//# sourceMappingURL=seedData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema_1 = require("./UserSchema");
const userschema = new UserSchema_1.default({
    collection: 'user'
});
const UserModel = mongoose.model('user', userschema, 'users', true);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map
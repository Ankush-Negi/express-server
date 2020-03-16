"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../versionable/VersionableSchema");
class UserSchema extends VersionableSchema_1.default {
    constructor(options) {
        const userSchema = {
            email: String,
            name: String,
            role: String,
            address: String,
            dob: Date,
            mobileNumber: Number,
            hobbies: [String],
            password: String
        };
        super(userSchema, options);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map
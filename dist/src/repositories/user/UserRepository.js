"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("./UserModel");
const VersionableRepository_1 = require("../versionable/VersionableRepository");
class UserRepository extends VersionableRepository_1.default {
    constructor() {
        super(UserModel_1.default);
        this.create = data => {
            return super.create(data);
        };
        this.update = data => {
            return super.update(data);
        };
        this.list = (query, options) => {
            return super.list(query, options);
        };
        this.delete = data => {
            return super.delete(data);
        };
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map
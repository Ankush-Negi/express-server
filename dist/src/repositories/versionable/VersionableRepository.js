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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
class VersionableRepository {
    constructor(modelType) {
        this.modelType = modelType;
    }
    generateId() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongoose.Types.ObjectId();
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield this.generateId();
            const { password } = data, rest = __rest(data, ["password"]);
            const hashPassword = yield bcrypt.hash(password, 10);
            return this.modelType.create(Object.assign({ originalId: id, password: hashPassword, createdBy: id, createdAt: Date.now() }, rest));
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType
                .findOne(Object.assign(Object.assign({}, query), { deletedAt: undefined }))
                .lean();
        });
    }
    count(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType.countDocuments(Object.assign({}, data));
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, dataToUpdate } = data;
            const record = yield this.findOne({ originalId: id });
            if (record === null || !record) {
                throw new Error(`Record at id ${id} does not exist`);
            }
            yield this.delete(id);
            const { __v, originalId } = record, rest = __rest(record, ["__v", "originalId"]);
            const newId = yield this.generateId();
            const d = Object.assign(Object.assign(Object.assign({ originalId }, rest), dataToUpdate), { _id: newId });
            return yield this.modelType.create(Object.assign(Object.assign({}, d), { updatedAt: Date.now(), updatedBy: originalId }));
        });
    }
    delete(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = data;
            return yield this.modelType.update({
                originalId: id,
                deletedAt: undefined
            }, {
                deletedAt: new Date()
            });
        });
    }
    list(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.sort === '' || options.sort === undefined) {
                options.sort = 'createdAt';
            }
            const traineeList = yield this.modelType
                .find(query, {}, options).collation({ locale: 'en' });
            const docCount = traineeList.length;
            return { docCount, traineeList };
        });
    }
}
exports.default = VersionableRepository;
//# sourceMappingURL=VersionableRepository.js.map
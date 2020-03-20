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
const UserRepository_1 = require("../../repositories/user/UserRepository");
const bcrypt = require("bcrypt");
class TraineeController {
    constructor() {
        this.userRepository = new UserRepository_1.default();
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { originalId } = req.user;
            const userId = originalId;
            console.log('Original id of controller', originalId, userId);
            console.log('req user ki value in controller', req.user);
            const id = yield this.userRepository.generateId();
            const _a = req.body, { password } = _a, rest = __rest(_a, ["password"]);
            const hashPassword = yield bcrypt.hash(password, 10);
            const dataTocreate = Object.assign({ originalId: id, _id: id, password: hashPassword, createdBy: userId, createdAt: Date.now() }, rest);
            const user = yield this.userRepository.create(dataTocreate);
            if (!user) {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
            res.send({
                status: 'OK',
                message: 'Trainee added successfully'
            });
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.delete(req.params);
            if (!user) {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
            res.send({
                status: 'OK',
                message: 'Trainee deleted successfully'
            });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, dataToUpdate } = req.body;
            const { originalId } = req.user;
            const userId = originalId;
            const record = yield this.userRepository.findOne({ originalId: id });
            if (record === null || !record) {
                throw new Error(`Record at id ${id} does not exist`);
            }
            const { __v, _id } = record, rest = __rest(record, ["__v", "_id"]);
            const newData = { id, userId };
            const data = {
                newData,
                rest,
                dataToUpdate,
                updatedAt: Date.now(),
                updatedBy: userId
            };
            const user = yield this.userRepository.update(data);
            if (!user) {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
            res.send({
                status: 'OK',
                message: 'Trainee updated successfully'
            });
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _b = req.query, { skip, limit, name, email } = _b, rest = __rest(_b, ["skip", "limit", "name", "email"]);
            let { sort } = rest;
            if (sort === '' || sort === undefined) {
                sort = 'createdAt';
            }
            const options = { skip, limit, sort };
            let regexValue;
            let reg = {};
            if (name !== '' && name !== undefined) {
                const del1 = name;
                regexValue = 'name';
                reg = { [regexValue]: { $regex: `^${del1}`, $options: 'i' } };
            }
            if (email !== '' && email !== undefined) {
                regexValue = 'email';
                const del2 = email;
                reg = Object.assign(Object.assign({}, reg), { [regexValue]: { $regex: `^${del2}`, $options: 'i' } });
            }
            const query = Object.assign(reg, rest);
            const getUsers = yield this.userRepository.list(query, options);
            if (!getUsers) {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
            const { listCount, list } = getUsers;
            res.send({
                status: 'OK',
                message: 'Trainee list : ',
                data: {
                    total_user: listCount,
                    list
                }
            });
        });
    }
}
TraineeController.getInstance = () => {
    if (!TraineeController.instance) {
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    return TraineeController.instance;
};
exports.default = TraineeController.getInstance();
//# sourceMappingURL=Controller.js.map
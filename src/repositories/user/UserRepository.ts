import UserModel from './UserModel';
import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(UserModel);
    }

    create = async (data) => {
        return await super.create(data);
    }

    update = async (data) => {
        return await super.update(data);
    }

    list = async (data) => {
        return await super.list(data);
    }

    delete = (id) => {
        return super.delete(id);
    }
}
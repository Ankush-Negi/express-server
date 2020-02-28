import UserModel from './UserModel';
import * as mongoose from 'mongoose';

export default class UserRepository {
    private userModel;
    constructor() {
        this.userModel = UserModel;
    }

    create = (data) => {
        data._id = mongoose.Types.ObjectId().toHexString();
        return this.userModel.create(data);
    }

    find = (query) => {
        return this.userModel.find(query);
    }
    findOne =  (query) => {
        const count= this.userModel.findOne(query);
        return count;
    }
    update = (id, dataToUpdate) => {
        return this.userModel.findByIdAndUpdate(id, dataToUpdate).lean();
    }
    delete = (id) => {
        return this.userModel.findByIdAndRemove(id);
    }
    count = () => {
        return this.userModel.countDocuments();
    }
    
}
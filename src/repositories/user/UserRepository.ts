import UserModel from './UserModel';

export default class UserRepository {
    private userModel;
    constructor() {
        this.userModel = UserModel;
    }

    create = (data) => {
        return this.userModel.create(data);
    }

    find = (query) => {
        return this.userModel.findOne(query);
    }
    findById = (id) => {
        return this.userModel.findById(id);
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
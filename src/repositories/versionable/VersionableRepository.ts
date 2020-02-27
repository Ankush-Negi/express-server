import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';
import UserRepository from '../user/UserRepository';

export default class VersionableRepository<D extends IVersionableDocument, M extends mongoose.Model<D>> {

    private modelType: M;
    constructor(modelType) {
        this.modelType = modelType;
    }

    public async generateId() {
        return await mongoose.Types.ObjectId();
    }

    create = async (data) => {
        const id = await this.generateId();
        return await this.modelType.create({
            originalId: id,
            _id: id,
            createdBy: Date.now(),
            createdAt: Date.now(),
            ...data,
        });
    }

    findOne = async (query) => {
        return await this.modelType.findOne({
            ...query,
            deletedAt: undefined
        });
    }

    count = async () => {
        return await this.modelType.countDocuments();
    }

    update = async (data): Promise<any> => {
        const { id, dataToUpdate } = data;
        const record = await this.findOne({ originalId: id });
        if (record === null || !record) {
            throw new Error(`Record at id ${id} does not exist`);
        }
        await this.delete(id);
        const { __v , ...rest } = record;
        const newId = await this.generateId();
        const d = {...rest, ...dataToUpdate, ...record, _id: newId};
        return await this.modelType.create({
            ...d,
            updatedAt: Date.now(),
            updatedBy: Date.now(),
        });
    }
    delete = async (id: string) => {
        console.log('Inside Delete');
        return await this.modelType.update(
            {
                originalId: id,
                deletedAt: undefined
            },
            {
                deletedAt: new Date()
            });
    }
    list = async (data) => {
        const {skipValue, limitValue} = data;
        const del = { deletedAt: undefined };
        return await this.modelType.find(del).skip(skipValue).limit(limitValue).exec();
        }
    }
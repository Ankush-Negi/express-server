import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';
import UserRepository from '../user/UserRepository';

export default class VersionableRepository<D extends IVersionableDocument, M extends mongoose.Model<D>> {

    private modelType: M;
    constructor(modelType) {
        this.modelType = modelType;
    }

    public generateId() {
        return mongoose.Types.ObjectId();
    }

    create(data) {
        const id = this.generateId();
        console.log('>>>>>>>>>>>After Generate Id', id);
        return this.modelType.create({
            originalId: id,
            _id: id,
            createdBy: Date.now(),
            createdAt: Date.now(),
            ...data,
        });
    }

    findOne(query) {
        return this.modelType.findOne({
            ...query,
            deletedAt: undefined
        });
    }

    count() {
        return this.modelType.countDocuments();
    }

    update(data): Promise<any> {
        const { id, dataToUpdate } = data;
        let originalData;
        return this.findOne({ originalId: id }).lean()
            .then(record => {
                if (record === null || !record) {
                    throw new Error(`Record at id ${id} does not exist`);
                }
                originalData = record;
                return this.delete(id);
                })
            .then(deletedData => {
                    const { __v , ...rest } = originalData;
                    const newId = this.generateId();
                    const d = {...rest, ...dataToUpdate, ...deletedData, _id: newId};
                    return this.modelType.create({
                        ...d,
                        updatedAt: Date.now(),
                        updatedBy: Date.now(),
                    });
            }).catch(err => {
                console.log('Error in Update');
            });
    }
    delete (id: string) {
        console.log('Inside Delete');
        return this.modelType.update(
            {
                originalId: id,
                deletedAt: undefined
            },
            {
                deletedAt: new Date()
            });
    }
    list(data) {
        const {skipValue, limitValue} = data;
        const del = { deletedAt: undefined };
        return this.modelType.find(del).skip(skipValue).limit(limitValue).exec();
        }
    }
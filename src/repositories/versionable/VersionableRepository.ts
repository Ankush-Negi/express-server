import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';
import * as bycrpt from 'bcrypt';

export default class VersionableRepository<D extends IVersionableDocument, M extends mongoose.Model<D>> {

    private modelType: M;
    constructor(modelType) {
        this.modelType = modelType;
    }

    public async generateId() {
        return await mongoose.Types.ObjectId();
    }

    async create(data) {
        const id = await this.generateId();
        const { password, ...rest } = data;
        const hashPassword: string = await bycrpt.hash(password, 10);
        return this.modelType.create({
            originalId: id,
            _id: id,
            password: hashPassword,
            createdBy: Date.now(),
            createdAt: Date.now(),
            ...rest,
        });
    }

    async findOne(query) {
        return await this.modelType.findOne({
            ...query,
            deletedAt: undefined
        }).lean();
    }

    async count() {
        return await this.modelType.countDocuments({ deletedAt: undefined });
    }

    async update(data) {
        const { id, dataToUpdate } = data;
        const record = await this.findOne({ originalId: id });
        if (record === null || !record) {
            throw new Error(`Record at id ${id} does not exist`);
        }
        await this.delete(id);
        const { __v, ...rest } = record;
        const newId = await this.generateId();
        const d = { ...rest, ...dataToUpdate, _id: newId };
        console.log(d);
        return await this.modelType.create({
            ...d,
            updatedAt: Date.now(),
            updatedBy: Date.now(),
        });
    }
    async delete(id: string) {
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
    async list(data) {
        const { sort, skip, limit } = data;
        const del = { deletedAt: undefined };
        const docCount = await this.count();
        const traineeList = await this.modelType.find(del).sort(sort).skip(skip).limit(limit).exec();
        return { docCount, traineeList };
    }
}
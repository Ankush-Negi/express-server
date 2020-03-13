import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';
import * as bcrypt from 'bcrypt';

export default class VersionableRepository<
  D extends IVersionableDocument,
  M extends mongoose.Model<D>
> {
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
    const hashPassword: string = await bcrypt.hash(password, 10);
    return this.modelType.create({
      originalId: id,
      _id: id,
      password: hashPassword,
      createdBy: id,
      createdAt: Date.now(),
      ...rest
    });
  }

  async findOne(query) {
    return await this.modelType
      .findOne({
        ...query,
        deletedAt: undefined
      })
      .lean();
  }

  async count(data) {
    return await this.modelType.countDocuments({ ...data });
  }

  async update(data) {
    const { id, dataToUpdate } = data;
    const record = await this.findOne({ originalId: id });
    if (record === null || !record) {
      throw new Error(`Record at id ${id} does not exist`);
    }
    await this.delete(id);
    const { __v, originalId, ...rest } = record;
    const newId = await this.generateId();
    const d = { originalId, ...rest, ...dataToUpdate, _id: newId };
    return await this.modelType.create({
      ...d,
      updatedAt: Date.now(),
      updatedBy: originalId
    });
  }
  async delete(data) {
    const { id } = data;
    return await this.modelType.update(
      {
        originalId: id,
        deletedAt: undefined
      },
      {
        deletedAt: new Date()
      }
    );
  }
  async list(data) {
    const { sort, skip, limit, name, email } = data;
    let del;
    let regexValue;
    if (name !== '' && name !== undefined) {
      del = name;
      regexValue = 'name';
    }
    if (email !== '' && email !== undefined) {
      regexValue = 'email';
      del = { ...del, email };
    }
    const traineeList = await this.modelType
      .find({
        [regexValue]: { $regex: `^${del}`, $options: 'i' },
        deletedAt: undefined
      })
      .sort(sort)
      .collation({ locale: 'en' })
      .skip(skip)
      .limit(limit)
      .exec();
    const docCount = traineeList.length;
    return { docCount, traineeList };
  }
}

import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';

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
    return this.modelType.create(data);
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
    return await this.modelType.countDocuments(data);
  }

  async update(data) {
    const { newData, ...restAllData } = data;
    this.delete(newData);
    return await this.modelType.create({
      ...restAllData,
    });
  }

  async delete(data) {
    const { id, userId } = data;
    return await this.modelType.update(
      {
        originalId: id,
        deletedAt: undefined,
      },
      {
        deletedAt: new Date(),
        deletedBy: userId,
      }
    );
  }

  async list(query, options) {
    const list = await this.modelType
      .find(query, {}, options)
      .collation({locale: 'en'});
    const listCount = list.length;
    return { listCount, list };
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class VersionableSchema extends mongoose.Schema {
    constructor(schema, options) {
        const baseSchema = {
            createdAt: Date,
            createdBy: String,
            updatedAt: Date,
            updatedBy: String,
            deletedAt: Date,
            deletedBy: String,
            originalId: String
        };
        super(Object.assign(Object.assign({}, schema), baseSchema), options);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=VersionableSchema.js.map
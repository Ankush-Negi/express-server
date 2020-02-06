"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: ['head-trainer', 'trainer'],
    }
};
exports.permissions = permissions;
//# sourceMappingURL=constants.js.map
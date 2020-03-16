"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    const roles = constants_1.permissions[moduleName][permissionType];
    if (roles.includes(role)) {
        return true;
    }
    else {
        const allRoles = constants_1.permissions[moduleName].all;
        return allRoles.includes(role);
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map
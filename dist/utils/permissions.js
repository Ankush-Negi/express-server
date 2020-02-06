"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPermission(moduleName, role, permissionType) {
    const roles = moduleName[permissionType];
    return roles.includes(role);
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map
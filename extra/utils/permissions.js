export default function hasPermission(moduleName, role, permissionType){
    const roles = moduleName[permissionType];
    return roles.includes(role);
}
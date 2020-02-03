let permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
        }   
    }

function hasPermission(moduleName, role, permissionType){
    const roles=moduleName[permissionType]

    return roles.includes(role);
}
console.log(hasPermission(permissions.getUsers,"trainee","read"));
console.log(hasPermission(permissions.getUsers,"trainer","all"));
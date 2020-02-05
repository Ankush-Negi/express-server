export default function hasPermission(moduleName, role, permissionType){
    const roles=moduleName[permissionType];
    //let check = false;
    //role.forEach(element => {
    //    if(element == role){
    //        decide = true;
    //    }
    //});
    //return decide;
    return roles.includes(role);
}
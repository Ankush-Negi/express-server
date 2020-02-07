import { IModuleName } from '../interfaces';
export default function hasPermission( moduleName: IModuleName, role: string, permissionType: string): boolean {
    const roles: string = moduleName[ permissionType ];
    return roles.includes(role);
}
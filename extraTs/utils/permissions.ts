import {permissions} from '../constants';

export default function hasPermission( moduleName: string, role: string, permissionType: string): boolean {
    const roles: string = permissions[moduleName][ permissionType ];
    return roles.includes(role);
}
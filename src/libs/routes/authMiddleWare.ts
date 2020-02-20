import { Request, Response, NextFunction } from 'express';
import { hasPermission } from '../../../extraTs/utils';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

export default (module:string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {

    try{

        const token: string = req.headers.authorization;
        const { secretKey } = config;
        const decodeUser = jwt.verify(token, secretKey);
        
        if(!decodeUser){
            next({
                status: 403,
                error: "Unauthorized Access",
                message: "Unauthorized Access"
            });
        }
        console.log(decodeUser.role);
        console.log(permissionType);
        console.log(typeof(module));
        if(!hasPermission( module, decodeUser.role, permissionType ) ) {
            next({
                error: "Unauthorized access",
                status: 403,
                message: "Permission Denied"
            });
        }
        next();
    }
    catch(error){
        next({
            message: error.message,
            status : 403,
            error: 'Unauthorised Access', 
        });
        
    }
    next();
    

}
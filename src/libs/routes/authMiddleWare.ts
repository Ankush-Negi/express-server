import { Request, Response, NextFunction } from 'express';
import { hasPermission } from '../../../extraTs/utils';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import IRequest from '../../libs/routes/IRequest';

export default (module:string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
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
        new UserRepository().findOne({_id: decodeUser._id, email: decodeUser.email})
        .then( user => {
             if (user === null){
                next({
                    error: 'Unauthorized Access',
                    message: 'User does not access'
                });
            }
            req.user = user;
           if(!hasPermission( module, decodeUser.role, permissionType ) ) {
                next({
                   error: "Unauthorized access",
                   status: 403,
                   message: "Permission Denied"
               });  
           }
           next();
        });
        
    }
    catch(error){
        next({
            message: error.message,
            status : 403,
            error: 'Unauthorised Access', 
        });    
    }
}
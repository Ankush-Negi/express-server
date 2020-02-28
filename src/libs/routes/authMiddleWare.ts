import { Request, Response, NextFunction } from 'express';
import { hasPermission } from '../../../extraTs/utils';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import IRequest from '../../libs/routes/IRequest';

export default (module: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {

        const token: string = req.headers.authorization;
        const { secretKey } = config;
        const decodeUser = jwt.verify(token, secretKey);
        if (!decodeUser) {
            throw new Error('Unauthorised User');
        }
        new UserRepository().findOne({ _id: decodeUser._id, email: decodeUser.email })
            .then(user => {
                if (user === null) {
                    throw new Error('Email and Id are Invalid');
                }
                req.user = user;
                if (!hasPermission(module, decodeUser.role, permissionType)) {
                    throw new Error('Permission Denied');
                }
                next();
            });

    }
    catch (error) {
        next({
            message: error.message,
            status: 403,
            error: 'Unauthorised Access',
        });
    }
}
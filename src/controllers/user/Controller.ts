import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import IRequest from '../../libs/routes/IRequest';
import UserRepository from '../../repositories/user/UserRepository';
import config from '../../config/configuration';

class UserController {

    private userRepository = new UserRepository();

    static instance: UserController;
    static getInstance = () => {
        if (!UserController.instance) {
            UserController.instance = new UserController();

        }
        return UserController.instance;
    }

    me = (req: IRequest, res: Response, next: NextFunction) => {
        try {
            res.send(req.user);
        }
        catch (err) {
            return next({
                error: err,
                message: err
            });
        }
    }
    login = async (req: IRequest, res: Response, next: NextFunction) => {
        const { email, password } = req.body;
        try {
            const userData = await this.userRepository.findOne({ email });
            if (!userData) {
                throw new Error('Email is Invalid');
            }
            const result = await bcrypt.compare(password, userData.password);
            console.log(result);
            if (result) {
                const originalId = userData.originalId;
                const role = userData.role;
                const token = await jwt.sign({ email, originalId, role }, config.secretKey, { expiresIn: (60 * 60) / 4 });
                res.send({
                    message: 'Token Generated',
                    token
                });
            }
            else {
                throw new Error('Password is Invalid');
            }
        }
        catch (error) {
            res.send('Error in token generation');
        }
    }
}
export default UserController.getInstance();
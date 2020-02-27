import { Router } from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter: Router = Router();
userRouter
    .get('/me', authMiddleWare('getUsers', 'read'), UserController.me)
    .post('/login', UserController.login);
export default userRouter;
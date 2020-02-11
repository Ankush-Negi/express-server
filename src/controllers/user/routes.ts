import { Router } from 'express';
import UserController from './Controller';

const userRouter = Router();
userRouter
.get('/',UserController.findAll)
.get('/?id',UserController.findOne)
.post('/',UserController.create)
.put('/?id',UserController.update)
.delete('/?id',UserController.delete);

export default userRouter;

import { Router } from 'express';
import UserController from './Controller';

const userRouter: Router = Router();
userRouter
.get('/',UserController.getAll)
.get('/:id',UserController.getById)
.post('/',UserController.create)
.put('/:id',UserController.update)
.delete('/:id',UserController.delete);

export default userRouter;

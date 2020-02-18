import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';

const userRouter: Router = Router();
userRouter
.get('/',validationHandler(validation.get),UserController.getAll)
.get('/:id',validationHandler(validation.get),UserController.getById)
.post('/',validationHandler(validation.create), UserController.create)
.put('/:id',validationHandler(validation.update),UserController.update)
.delete('/:id',validationHandler(validation.delete),UserController.delete);

export default userRouter;

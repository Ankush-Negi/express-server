import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter: Router = Router();
userRouter

.get('/', authMiddleWare('getUsers','read'))
.get('/:id', authMiddleWare('getUsers','read'))
.post('/', authMiddleWare('getUsers','read'))
.put('/:id', authMiddleWare('getUsers','read'))
.delete('/:id', authMiddleWare('getUsers','read'));

// .get('/', validationHandler(validation.get), UserController.getAll)
// .get('/:id', validationHandler(validation.get), UserController.getById)
// .post('/', validationHandler(validation.create), UserController.create)
// .put('/:id', validationHandler(validation.update), UserController.update)
// .delete('/:id', validationHandler(validation.delete), UserController.delete);

export default userRouter;

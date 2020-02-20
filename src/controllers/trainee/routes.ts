import { Router } from 'express';
import TraineeController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from '../user/validation';

const traineeRouter: Router = Router();
traineeRouter

.get('/', validationHandler(validation.get), authMiddleWare('getUsers','read'), TraineeController.getAll)
.get('/:id', validationHandler(validation.get), authMiddleWare('getUsers','read'), TraineeController.getById)
.post('/', validationHandler(validation.create), authMiddleWare('getUsers','read'), TraineeController.create)
.put('/:id', validationHandler(validation.update), authMiddleWare('getUsers','read'), TraineeController.update)
.delete('/:id', validationHandler(validation.delete), authMiddleWare('getUsers','read'), TraineeController.delete);

export default traineeRouter;
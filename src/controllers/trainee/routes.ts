import { Router } from 'express';
import TraineeController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from '../user/validation';

const traineeRouter: Router = Router();
traineeRouter

    .get('/', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.getAll)
    .post('/', authMiddleWare('getUsers', 'read'), validationHandler(validation.create), TraineeController.create)
    .put('/', authMiddleWare('getUsers', 'read'), validationHandler(validation.update), TraineeController.update)
    .delete('/', authMiddleWare('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;
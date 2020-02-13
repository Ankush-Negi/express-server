import { Router } from 'express';
import TraineeController from './Controller';

const traineeRouter: Router = Router();
traineeRouter
.get('/',TraineeController.getAll)
.get('/?id',TraineeController.getById)
.post('/',TraineeController.create)
.put('/?id',TraineeController.update)
.delete('/?id',TraineeController.delete);

export default traineeRouter;
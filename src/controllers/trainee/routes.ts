import { Router } from 'express';
import TraineeController from './Controller';

const traineeRouter = Router();
traineeRouter
.get('/',TraineeController.findAll)
.get('/:id',TraineeController.findOne)
.post('/',TraineeController.create)
.put('/:id',TraineeController.update)
.delete('/:id',TraineeController.delete);

export default traineeRouter;
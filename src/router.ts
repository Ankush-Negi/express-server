import { Router} from 'express';
import {traineeRouter} from './controllers/trainee'
import {userRouter} from './controllers/user'

const routers = Router();
routers
.use('/trainee', traineeRouter)
.use('/user',userRouter);

export default routers;
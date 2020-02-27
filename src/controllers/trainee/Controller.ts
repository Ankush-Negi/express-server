import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository = new UserRepository();

    static instance;
    static getInstance = (): TraineeController => {
        if (!TraineeController.instance) {
            TraineeController.instance = new TraineeController();
            return TraineeController.instance;
        }
        return TraineeController.instance;
    }
    create = (req: Request, res: Response) => {
        const user = this.userRepository.create(req.body);
        if (user) {
            res.send({
                status: 'OK',
                message: 'Trainee added successfully'
            });
        }
        else {
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
            };
        }
    }
    delete = (req: Request, res: Response) => {
        const user = this.userRepository.delete(req.params);
        if (user) {
            res.send({
                status: 'OK',
                message: 'Trainee deleted successfully'
            });
        }
        else {
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
            };
        }
    }
    update = (req: Request, res: Response) => {
        this.userRepository.update(req.body).then((user) => {
            if (user) {
                res.send({
                    status: 'OK',
                    message: 'Trainee updated successfully'
                });
            }
            else {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
        });
    }
    getAll = (req: Request, res: Response) => {
        this.userRepository.list(req.query).then((getUsers) => {
            if (getUsers) {
                res.send({
                    status: 'OK',
                    message: 'Trainee list : ',
                    data: {getUsers}
                });
            }
            else {
                throw {
                    error: 'Error Occured',
                    message: 'Type of the entered data is not valid'
                };
            }
        });

    }
}
export default TraineeController.getInstance();
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
    create = async (req: Request, res: Response) => {
        const user = await this.userRepository.create(req.body);
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
    delete = async (req: Request, res: Response) => {
        const user = await this.userRepository.delete(req.params);
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
    update = async (req: Request, res: Response) => {
        const user = await this.userRepository.update(req.body);
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
    }
    getAll = async (req: Request, res: Response) => {
        const getUsers = await this.userRepository.list(req.query);
        if (getUsers) {
            const { docCount, traineeList } = getUsers;
            res.send({
                status: 'OK',
                message: 'Trainee list : ',
                data: {
                    total_user: docCount,
                    traineeList
                }
            });
        }
        else {
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
            };
        }
    }
}
export default TraineeController.getInstance();
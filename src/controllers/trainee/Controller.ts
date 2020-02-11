import {Request, Response} from 'express';
class TraineeController{

    static instance;
    static getInstance = () => {
    if(!TraineeController.instance)
    {
        TraineeController.instance= new TraineeController();

    }
    return TraineeController.instance;
    }
    create = (req: Request,res:Response)=>{
        res.send({
            status: 'OK',
            message: 'trainee added successfully',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    delete = (req:Request, res:Response) => {
        res.send({
            status: 'OK',
            message: 'trainee deleted successfully',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    update = (req:Request, res:Response) => {
        res.send({
            status: 'OK',
            message: 'trainee updated successfully',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    findAll = (req:Request, res:Response) => {
        console.log(':::::::::::Inside FindAll trainee::::::::::::::');
        res.send({
            status: 'OK',
            message: 'trainee list is: \n',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    findOne = (req:Request, res:Response) => {
        console.log(':::::::::::Inside FindOne trainee::::::::::::::');
        res.send({
            status: 'OK',
            message: 'trainee found :\n',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }

}
export default TraineeController.getInstance();
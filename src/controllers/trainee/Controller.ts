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
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'Trainee added successfully',
                data: {id, name}
            });
        }
        else{
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
             }
        }
    }
    delete = (req:Request, res:Response) => {
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'Trainee deleted successfully',
                data: {id, name}
            });
        }
        else{
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
             }
        }
    }
    update = (req:Request, res:Response) => {
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'Trainee updated successfully',
                data: {id, name}
            });
        }
        else{
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
             }
        }
    }
    getAll = (req:Request, res:Response) => {
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'Trainee list : ',
                data: {id, name}
            });
        }
        else{
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
             }
        }
    }
    getById = (req:Request, res:Response) => {
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'Trainee Found',
                data: {id, name}
            });
        }
        else{
            throw {
                error: 'Error Occured',
                message: 'Type of the entered data is not valid'
             }
        }
    }

}
export default TraineeController.getInstance();
import {Request, Response} from 'express';

class UserController{

    static instance: UserController;
    static getInstance = () => {
    if(!UserController.instance)
    {
        UserController.instance= new UserController();

    }
    return UserController.instance;
    }
    create = (req: Request,res:Response)=>{
        const { id, name} = req.body;
        if((typeof(id) === 'number') &&  (typeof(name) === 'string')){
            console.log({id}, {name});
            res.send({
                status: 'OK',
                message: 'User added successfully',
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
                message: 'User deleted successfully',
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
                message: 'User updated successfully',
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
                message: 'List of all users',
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
                message: 'User found',
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
export default UserController.getInstance();
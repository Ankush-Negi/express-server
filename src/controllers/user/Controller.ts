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
        res.send({
            status: 'OK',
            message: 'User added successfully',
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
            message: 'User deleted successfully',
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
            message: 'User updated successfully',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    findAll = (req:Request, res:Response) => {
        res.send({
            status: 'OK',
            message: 'User list is: \n',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }
    findOne = (req:Request, res:Response) => {
        res.send({
            status: 'OK',
            message: 'User found :\n',
            data:{
                id: 1,
                name: 'Ankush',
                address: 'Delhi'
            }
        });
    }

}
export default UserController.getInstance();
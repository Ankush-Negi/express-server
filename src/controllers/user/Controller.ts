import { Response, NextFunction} from 'express';
import IRequest from '../../libs/routes/IRequest';

class UserController{

    static instance: UserController;
    static getInstance = () => {
    if(!UserController.instance)
    {
        UserController.instance= new UserController();

    }
    return UserController.instance;
    }

    me = (req: IRequest, res: Response, next: NextFunction) => {
        try{
            res.send(req.user);
        }
        catch(err){
            return next({
                error: err,
                message: err
            })
        }
    }

}
export default UserController.getInstance();
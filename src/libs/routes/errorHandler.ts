import {Request, Response, NextFunction} from 'express';
function errHandler(err:Error | String[], req: Request, res: Response, next: NextFunction){
    if(Array.isArray(err)){
        const errArr = [];
        err.forEach(element => {
            errArr.push({
                error : element,
                message: "error",
                status: 500,
                timestamp: new Date()
            });
        });
        res.send(errArr);
    }
    else{
        const errorHandler = {
            error: err.message,
            message: "error",
            status: 500,
            timestamp: new Date()
        }
    res.send(errorHandler);
    }
};
export default errHandler;
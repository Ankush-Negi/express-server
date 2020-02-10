import {Request, Response, NextFunction} from 'express';
function errHandler(err: Error,req: Request, res: Response, next: NextFunction){
        const errorHandler = {
            error: err.message,
            message: "error",
            status: 500,
            timestamp: new Date()
            }
            res.send(errorHandler);
}
export default errHandler;
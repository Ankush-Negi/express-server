import IConfig from './config/IConfig';
import * as express from 'express';

export default class Server {
    app: express.Application;
    constructor( private config: IConfig) {
        this.app = express();
    }
    bootstrap = () => {
        this.setupRoutes();
        return this;
    }

    run = () => {
        const{app, config: { port , env } } = this;
        this.app.listen(port, (err) => {
            if (err) {
                throw err;
            }
        });
       console.log('App is running successfully at ', port, env);
       return this;
    }

    setupRoutes = () => {
        this.app.get('/health-check', ( req, res) => {
            res.send(':::::::::::SUCCESS::::::::::::');
            return this;
        });
    }

}
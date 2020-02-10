import IConfig from './config/IConfig';
import * as express from 'express';

export default class Server {
    app: express.Express;
    constructor( private config: IConfig) {
        this.app = express();
    }

    getApplication = () => {
        return this.app;
    }

    bootstrap = () => {
        this.setupRoutes();
        return this.app;
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
        this.app.use('/health-check', ( req, res) => {
            res.send('I am OK.');
            return this;
        });
    }

}